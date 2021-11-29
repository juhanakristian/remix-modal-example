import { Outlet } from "react-router";
import { Link } from "remix";

export default function Invoices() {
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
          <tr>
            <td>1</td>
            <td>Remix</td>
            <td>Invoice for Remix license</td>
            <td>$200</td>
            <td>10/10/2021</td>
            <td>
              <Link to="/invoices/1/edit">Edit</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
