import * as React from "react";
import Dialog from "@reach/dialog";
import type { ActionFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { json } from "remix";
import { Form } from "remix";
import { useNavigate } from "remix";
import styles from "@reach/dialog/styles.css";

import stylesUrl from "~/styles/invoices/edit.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "stylesheet",
      href: stylesUrl
    }
  ];
};

export let loader: LoaderFunction = ({ params }) => {
  return json({
    id: params.id,
    company: "Remix",
    description: "Invoice for Remix license",
    amount: "200",
    date: new Date()
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
    date: data.date
  });

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    const { name, value } = event.currentTarget;
    setFormData({ ...formData, [name]: value });
  }

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Dialog
      className="dialog"
      isOpen={true}
      aria-label="Add invoice"
      onDismiss={onDismiss}
    >
      <Form method="post" replace onChange={handleChange}>
        <label className="label">Company</label>
        <input
          className="input"
          type="text"
          name="company"
          value={formData.company}
        />

        <label className="label">Description</label>
        <textarea
          className="input"
          name="description"
          value={formData.description}
          rows={5}
        />

        <label className="label">Amount</label>
        <input
          className="input"
          type="number"
          name="amount"
          value={formData.amount}
        />
        <input
          className="input"
          type="date"
          name="date"
          value={formData.date}
        />

        <div>
          <button type="submit">Save</button>
          <button type="button" onClick={onDismiss}>
            Cancel
          </button>
        </div>
      </Form>
    </Dialog>
  );
}
