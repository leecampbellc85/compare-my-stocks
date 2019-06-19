import React, { Component } from "react";
import { getEthereumData, getMicrosoftData } from "./api";
import "./App.css";

const ethereumData = getEthereumData();
const microsoftData = getMicrosoftData();
const myArray = [1, 2, 3];
const myArray2 = myArray.map(number => number + 1);
// myArray = [2, 3, 4]

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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
