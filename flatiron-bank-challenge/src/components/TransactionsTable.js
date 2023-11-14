import React, { useState, useEffect } from "react";


const url = "http://localhost:8001/transactions";

function TransactionTable({ transactions }) {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  function filterTransactions(event) {
    const searchValue = event.target.value.toLowerCase();

    const filtered = transactions.filter((transaction) => {
      const date = transaction.date.toLowerCase().includes(searchValue);
      const description = transaction.description
        .toLowerCase()
        .includes(searchValue);
      const category = transaction.category.toLowerCase().includes(searchValue);
      const amount = transaction.amount.toLowerCase().includes(searchValue);

      return date || description || category || amount;
    });

    setFilteredTransactions(filtered);
  }

  //function to make a DELETE REQUEST TO THE SERVER
  function handleDelete(e) {

    const itemDeleteID = e.target.value;

    console.log(itemDeleteID);
    fetch(`${url}/${itemDeleteID}`, {
      method: "DELETE",
    });
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id} >
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
           <td> <button value={transaction.id} onClick={handleDelete}>del</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;