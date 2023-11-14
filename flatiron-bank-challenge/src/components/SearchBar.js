function SearchBar({filterTransactions }) {

    function handleInputChange(event) {
        filterTransactions(event.target.value);
        console.log(event.target.value)
      }
    
  return (
    <div className="searchBar">
        
      <input type="text" placeholder="search your recent transactions" onChange={handleInputChange} />
      <span className="material-symbols-outlined">search</span>
      
    </div>
  );
}
export default SearchBar;