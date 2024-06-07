import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(search.length);
    if (search.length) {
      console.log(search);

      navigate("/menu?search=" + search);
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="button" onClick={handleClick}>
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </>
  );
}

export default Search;
