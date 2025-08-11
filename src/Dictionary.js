import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function displayDefinitions(response) {
    console.log(response);
  }

  function submitSearch(event) {
    event.preventDefault();
    alert(`Searching for the ${keyword}`);

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(displayDefinitions);
  }

  function displaySearch(event) {
    setKeyword(event.target.value);
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
