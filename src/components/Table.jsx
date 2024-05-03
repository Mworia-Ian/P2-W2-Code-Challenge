import Form from "react-bootstrap/Form"
import { useState } from "react"


function Table({ transactions, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <>
      <div className="mt-3 p-3">
        <form>
          <inputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </inputGroup>
        </form>
      </div>
      <div className="mt-5 p-2 text-center border rounded">
        <table className="table table-striped hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((transactions) => {
                return search.toLowerCase() === ""
                  ? transactions
                  : transactions.description.toLowerCase().includes(search);
              })
              .map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Del</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
