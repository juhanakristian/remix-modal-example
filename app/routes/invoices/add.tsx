import Dialog from "@reach/dialog";
import {
  ActionFunction,
  json,
  LinksFunction,
  redirect,
  useActionData,
} from "remix";
import { Form } from "remix";
import { useNavigate } from "remix";
import styles from "@reach/dialog/styles.css";
import stylesUrl from "~/styles/invoices/dialog.css";
import { db } from "~/utils/db.server";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

function validateAmount(amount: string) {
  const amountNumber = Number(amount);
  if (isNaN(amountNumber) || amountNumber <= 0) {
    return "Amount must be a number greater than 0";
  }
}

function validateCompany(company: string) {
  if (company.length < 3) {
    return "Company must be at least 3 characters";
  }
}

function validateDate(date: string) {
  if (isNaN(new Date(date).getTime())) {
    return "Date must be a valid date";
  }
}

function validateDescription(description: string) {
  if (typeof description !== "string") {
    return "Description must be a string";
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    company: string | undefined;
    amount: string | undefined;
    date: string | undefined;
    description: string | undefined;
  };
  fields?: {
    company: string;
    amount: string;
    date: string;
    description: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });
export let action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const company = form.get("company");
  const description = form.get("description");
  const amount = form.get("amount");
  const date = form.get("date");

  if (
    typeof company !== "string" ||
    typeof description !== "string" ||
    typeof amount !== "string" ||
    typeof date !== "string"
  ) {
    return badRequest({
      formError: "Invalid form data",
    });
  }

  const fields = { company, description, amount, date };
  const fieldErrors = {
    company: validateCompany(company),
    amount: validateAmount(amount),
    date: validateDate(date),
    description: validateDescription(description),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return { fieldErrors, fields };
  }

  const invoice = await db.invoice.create({
    data: {
      company,
      description,
      date: new Date(date),
      amount: parseFloat(amount),
    },
  });

  return redirect(`/invoices/`);
};

export default function Add() {
  const navigate = useNavigate();
  const actionData = useActionData<ActionData>();

  function onDismiss() {
    navigate("/invoices");
  }
  return (
    <Dialog
      className="dialog"
      isOpen={true}
      aria-label="Add invoice"
      onDismiss={onDismiss}
    >
      <Form className="form" method="post" replace>
        <label className="label" htmlFor="company">
          Company
          <input
            className="input"
            defaultValue={actionData?.fields?.company}
            type="text"
            name="company"
          />
        </label>
        {actionData?.fieldErrors?.company ? (
          <p className="form-validation-error" role="alert" id="name-error">
            {actionData.fieldErrors.company}
          </p>
        ) : null}

        <label className="label" htmlFor="description">
          Description
          <textarea
            className="textarea"
            defaultValue={actionData?.fields?.description}
            name="description"
            rows={10}
          />
        </label>
        {actionData?.fieldErrors?.description ? (
          <p className="form-validation-error" role="alert" id="name-error">
            {actionData.fieldErrors.description}
          </p>
        ) : null}

        <label className="label">
          Amount
          <input
            className="input"
            defaultValue={actionData?.fields?.amount}
            type="number"
            name="amount"
          />
        </label>
        {actionData?.fieldErrors?.amount ? (
          <p className="form-validation-error" role="alert" id="name-error">
            {actionData.fieldErrors.amount}
          </p>
        ) : null}
        <label className="label">
          Date
          <input
            className="input"
            defaultValue={actionData?.fields?.date}
            type="date"
            name="date"
          />
        </label>
        {actionData?.fieldErrors?.date ? (
          <p className="form-validation-error" role="alert" id="name-error">
            {actionData.fieldErrors.date}
          </p>
        ) : null}
        <div className="actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onDismiss}>
            Cancel
          </button>
        </div>
      </Form>
    </Dialog>
  );
}
