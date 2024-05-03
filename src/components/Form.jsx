import { useState } from 'react';
import Table from './Table';

function Form() {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const [transactions, setTransactions] = useState([])

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    const newTransaction = { ...formData }
    setTransactions([...transactions, newTransaction])
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleDelete = (index) => {
    const updatedTransactions = [...transactions]
    updatedTransactions.splice(index, 1)
    setTransactions(updatedTransactions)
  };

  return (
    <>
    <div className="container text-center mt-3 p-3 border rounded">
      <form onSubmit={onSubmit}>
        <div className="input-group g-3">
          <div className="p-1 g-col-6">
            <input
              name="date"
              type="date"
              className="form-control"
              value={formData.date}
              onChange={handleInput}
            />
          </div>
          <div className="p-1 g-col-6">
            <input
              name="description"
              type="text"
              className="form-control"
              placeholder="Description"
              value={formData.description}
              onChange={handleInput}
            />
          </div>
          <div className="p-1 g-col-6">
            <input
              name="category"
              type="text"
              className="form-control"
              placeholder="Category"
              value={formData.category}
              onChange={handleInput}
            />
          </div>
          <div className="p-1 g-col-6">
            <input
              name="amount"
              type="number"
              className="form-control"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleInput}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-3">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
    <Table transactions={transactions} onDelete={handleDelete}/>
    </>
  );
}

export default Form;
