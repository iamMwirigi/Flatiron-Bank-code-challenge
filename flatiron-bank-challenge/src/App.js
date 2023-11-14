import React, { useEffect, useState } from "react";
import "./App.css";
import AddTransactions from "./components/AddTransactions";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TransactionsTable from "./components/TransactionsTable";

const url = "http://localhost:8001/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  //function to set the date state
  const handleDateFunc = (e) => {
    setDate(e.target.value); //setting date state
  };
  function handleCategoryFunc(e) {
    setCategory(e.target.value);
  }
  function handleAmountFunc(e) {
    setAmount(e.target.value);
  }
  function handleDescriptionFunc(e) {
    setDescription(e.target.value);
  }

  //handle the submit event
  function handleSubmitFunc(e) {
    e.preventDefault();
    //create and an object of all form data
    const transactionObj = {
      date,
      amount,
      category,
      description,
    };
    //make a POST request to the serverr
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionObj),
    })
      .then((data) => data.json())
      .then((data) => console.log("transaction added", data));
  }

  //fetch data/get request for the data in the server
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  function filterTransactions(inputValue) {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredTransactions(filtered);
  }

  return (
    <div>
      <Header />
      <SearchBar filterTransactions={filterTransactions} />
      <AddTransactions
        date={date}
        description={description}
        category={category}
        amount={amount}
        handleDate={handleDateFunc}
        handleCategory={handleCategoryFunc}
        handleAmount={handleAmountFunc}
        handleDescription={handleDescriptionFunc}
        handleSubmit={handleSubmitFunc}
      />
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;