import Dialog from "@reach/dialog";
import type { ActionFunction, LinksFunction } from "remix";
import { Form } from "remix";
import { useNavigate } from "remix";
import styles from "@reach/dialog/styles.css";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
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
    <Dialog isOpen={true} aria-label="Add invoice" onDismiss={onDismiss}>
      <Form method="post" replace>
        <label>Company</label>
        <input type="text" />
        <label>Amount</label>
        <input type="text" />
        <button type="submit">Add</button>
        <button type="button" onClick={onDismiss}>
          Cancel
        </button>
      </Form>
    </Dialog>
  );
}
