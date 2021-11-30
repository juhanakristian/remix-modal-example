import Dialog from "@reach/dialog";
import type { ActionFunction, LinksFunction } from "remix";
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

export let action: ActionFunction = ({ request }) => {
  console.log(request);
  return null;
};

export default function Add() {
  const navigate = useNavigate();

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
