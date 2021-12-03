import {
  json,
  Link,
  LinksFunction,
  LoaderFunction,
  Outlet,
  useLoaderData,
} from "remix";

import stylesUrl from "~/styles/invoices/table.css";

import { db } from "~/utils/db.server";

interface Invoice {
  id: number;
  company: string;
  description: string;
  amount: number;
  date: Date;
}

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export let loader: LoaderFunction = async ({ params }) => {
  const invoices = await db.invoice.findMany();
  return json(invoices);
};

export default function Invoices() {
  const data = useLoaderData();

  return (
    <>
      <Outlet />
      <Link to="/invoices/add">Add</Link>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((invoice: Invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.company}</td>
              <td>{invoice.description}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.date}</td>
              <td>
                <Link to="/invoices/1/edit">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
