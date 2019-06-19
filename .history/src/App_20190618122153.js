import React, { Component } from "react";
import "./App.css";

import { getEthereumData } from "./api";
import { getMicrosoftData } from "./api";

import { PriceRow } from "./components/PriceRow"; 

const ethereumData = getEthereumData();
const microsoftData = getMicrosoftData();

class App extends Component {
  render() {
    return (
      <div className="crypto-stock-compare">
        <h1>Crypto Stock Compare</h1>
        <section className="value-table">
          <h2>Ethereum</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Low</th>
                <th>High</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {ethereumData.map(dataData =>
                <PriceRow dayData={dataData}/>
              )}
            </tbody>
          </table>
        </section>
        <section className="value-table">
          <h2>Microsoft</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>Low</th>
                <th>High</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
            {microsoftData.map(dataData =>
                <PriceRow dayData={dataData}/>
              )}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
