import React from "react";

export default function Results(props) {
  console.log(props.results);
  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      <p>These are the results from the API call</p>
    </div>
  );
}
