function AddTransactions({
  date,
  description,
  category,
  amount,

  handleDate,
  handleDescription,
  handleCategory,
  handleAmount,
  handleSubmit
  
}) {
 

  //don't write the function that monitor the state change in this form, instead pass them as props to parent
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          placeholder="date"
          value={date}
          onChange={handleDate}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={handleDescription}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={handleCategory}
        />
        <input
          type="text"
          placeholder="amount"
          value={amount}
          onChange={handleAmount}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
export default AddTransactions;