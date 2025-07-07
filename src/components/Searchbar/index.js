// src/components/SortAndSearchControls.jsx

import "./index.css";

const SortAndSearchControls = ({ searchValue, onSearch, onSort }) => {
  return (
    <div className="sort-search-controls">
      <div className="sort-buttons">
        <button onClick={() => onSort("id")}>Sort Post ID</button>
        <button onClick={() => onSort("name")}>Sort Name</button>
        <button onClick={() => onSort("email")}>Sort Email</button>
      </div>
       
<div className="search-bar">

      <input
        type="text"
          value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
        placeholder="🔍  Search name, email, comment"
        className="search-input"
      />
    </div>


     
    </div>
  );
};

export default SortAndSearchControls;
