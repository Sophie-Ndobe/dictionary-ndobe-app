import React from "react";

export default function Dictionary() {
  function submitSearch(event) {
    event.preventDefault();
    alert("Searching");
  }

  function displaySearch(event) {
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={submitSearch}>
        <input type="search" onChange={displaySearch} />
      </form>
      <p>This is a Dictionary App</p>
    </div>
  );
}
