import * as React from "react";
import Dialog from "@reach/dialog";
import type { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { json } from "remix";
import { Form } from "remix";
import { useNavigate } from "remix";
import styles from "@reach/dialog/styles.css";

import stylesUrl from "~/styles/invoices/dialog.css";

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

export let loader: LoaderFunction = ({ params }) => {
  return json({
    id: params.id,
    company: "Remix",
    description: "Invoice for Remix license",
    amount: "200",
  });
};

export let action: ActionFunction = ({ request }) => {
  console.log(request);
  return null;
};

export default function Edit() {
  const navigate = useNavigate();
  const data = useLoaderData();

  const [formData, setFormData] = React.useState({
    company: data.company,
    description: data.description,
    amount: data.amount,
  });

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

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
      <h3>Edit invoice</h3>
      <Form className="form" method="post" replace onChange={handleChange}>
        <label className="label" htmlFor="company">
          Company
        </label>
        <input
          className="input"
          type="text"
          name="company"
          value={formData.company}
        />

        <label className="label" htmlFor="description">
          Description
        </label>
        <textarea
          className="textarea"
          name="description"
          value={formData.description}
          rows={10}
        />

        <label className="label">Amount</label>
        <input
          className="input"
          type="number"
          name="amount"
          value={formData.amount}
        />

        <div className="actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onDismiss}>
            Cancel
          </button>
        </div>
      </Form>
    </Dialog>
  );
}
