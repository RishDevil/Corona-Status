import React, { useState, useEffect } from "react";
import Check from "./check";

function CheckContainer(props) {
  const [search, setSearch] = useState("");
  const change = (e) => {
    setSearch(e.target.value);
  };

  const searched = props.data.map((info) => {
    if (info.country.toLowerCase().indexOf(search.toLowerCase()) == 0) {
      return <Check data={info} />;
    }
  });

  return (
    <div>
      <input name="search" onChange={change} placeholder="search" />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Country</th>
            <th style={{ color: "blue" }}>Total Case</th>
            <th style={{ color: "yellow" }}>Active</th>
            <th style={{ color: "red" }}>Deaths</th>
            <th style={{ color: "green" }}>Recover</th>
            <th style={{ color: "#FA8072" }}>Critical</th>
            <th style={{ color: "#B8860B" }}>Today Cases</th>
            <th style={{ color: "#DC143C" }}>Today Deaths</th>
          </tr>
        </thead>
        <tbody>
          {search == ""
            ? props.data.map((info) => {
                return <Check data={info} key={info.country} />;
              })
            : searched}
        </tbody>
      </table>
    </div>
  );
}

export default CheckContainer;
