import Dialog from "@reach/dialog";
import { ActionFunction, LinksFunction, redirect } from "remix";
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

export let action: ActionFunction = async ({ request }) => {
  console.log("request", request);
  const form = await request.formData();
  const company = form.get("company");
  const description = form.get("description");
  const amount = form.get("amount");
  const date = form.get("date");

  if (!company || !description || !amount || !date) {
    return { formError: "Please fill all fields" };
  }

  console.log(typeof date);
  console.log(typeof company);
  console.log(typeof amount);
  console.log(typeof description);

  if (
    typeof company !== "string" ||
    typeof description !== "string" ||
    typeof amount !== "string" ||
    typeof date !== "string"
  ) {
    return { formError: "Invalid value" };
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
        </label>
        <input className="input" type="text" name="company" />

        <label className="label" htmlFor="description">
          Description
        </label>
        <textarea className="textarea" name="description" rows={10} />

        <label className="label">Amount</label>
        <input className="input" type="number" name="amount" />
        <input className="input" type="date" name="date" />
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
