import React, { Component } from "react";
import { EthereumData } from './components/EthereumRow';
import { MicrosoftData } from  './components/MicrosoftRow';
import "./App.css";

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
              {EthereumData.map(dayData => {
                const arrowClass = `arrow-${
                  dayData.change > 0 ? "up" : "down"
                }`;
                return (
                  <tr key={dayData.date}>
                    <td>{dayData.date}</td>
                    <td>{dayData.open}</td>
                    <td>{dayData.low}</td>
                    <td>{dayData.high}</td>
                    <td>
                      <span className={arrowClass} />
                      {dayData.change}%
                    </td>
                  </tr>
                );
              })}
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
              {MicrosoftData.map(dayData => {
                const arrowClass = `arrow-${
                  dayData.change > 0 ? "up" : "down"
                }`;
                return (
                  <tr key={dayData.date}>
                    <td>{dayData.date}</td>
                    <td>{dayData.open}</td>
                    <td>{dayData.low}</td>
                    <td>{dayData.high}</td>
                    <td>
                      <span className={arrowClass} />
                      {dayData.change}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;
