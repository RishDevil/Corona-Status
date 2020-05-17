import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./component/card";
import Check from "./component/check";
import Board from "./component/board";
import CheckContainer from "./component/checkContainer";

function App() {
  const [live, setLive] = useState([]);
  const [allc, setall] = useState([]);
  useEffect(() => {
    axios
      .all([
        axios.get("https://disease.sh/v2/all"),
        axios.get("https://disease.sh/v2/countries"),
      ])

      .then((res) => {
        setLive(res[0].data);
        setall(res[1].data);
        console.log(res[0].data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div className="App">
      <div class="container">
        <Board text="Corona World Data" />
        <div class="row">
          <div class="col-xl-3">
            <Card
              title="Total Cases"
              value={live.cases}
              c={2}
              time={live.updated}
            />
          </div>
          <div class="col-xl-3">
            <Card
              title="Active Cases"
              value={live.active}
              c={3}
              time={live.updated}
            />
          </div>
          <div class="col-xl-3">
            <Card
              title="Recovered Cases"
              value={live.recovered}
              c={0}
              time={live.updated}
            />
          </div>
          <div class="col-xl-3">
            <Card
              title="Deaths Cases"
              value={live.deaths}
              c={1}
              time={live.updated}
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-xl-4">
            <Card
              title="Critical"
              value={live.critical}
              c={1}
              time={live.updated}
            />
          </div>
          <div class="col-xl-4">
            <Card
              title="Today Cases"
              value={live.todayCases}
              c={2}
              time={live.updated}
            />
          </div>
          <div class="col-xl-4">
            <Card
              title="Today Death"
              value={live.todayDeaths}
              c={1}
              time={live.updated}
            />
          </div>
        </div>

        <Board text="Countries List" />
        <CheckContainer data={allc} />
      </div>
    </div>
  );
}

export default App;
