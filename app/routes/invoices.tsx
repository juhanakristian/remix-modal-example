import {
  json,
  Link,
  LinksFunction,
  LoaderFunction,
  Outlet,
  useLoaderData,
} from "remix";

import stylesUrl from "~/styles/invoices/table.css";

interface Invoice {
  id: number;
  company: string;
  description: string;
  amount: number;
}

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export let loader: LoaderFunction = ({ params }) => {
  return json([
    {
      id: 1,
      company: "Remix",
      description: "Invoice for Remix license",
      amount: "200",
    },

    {
      id: 2,
      company: "Remix",
      description: "Invoice for Remix license",
      amount: "200",
    },

    {
      id: 3,
      company: "Remix",
      description: "Invoice for Remix license",
      amount: "200",
    },
  ]);
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
          </tr>
        </thead>
        <tbody>
          {data.map((invoice: Invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.company}</td>
              <td>{invoice.description}</td>
              <td>{invoice.amount}</td>
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
