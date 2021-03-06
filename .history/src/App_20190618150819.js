import React, { Component } from "react";
import "./App.css";

import { PriceTable } from "./components/PriceTable";


class App extends Component {
  state = {
    ethereumData: null,
    microsoftData: null,
    hasLoaded: false
  }
  async componentDidMount() {
    const ethereumData = await getEthereumDataFromApi();
    const microsoftData = await getMicrosoftDataFromApi();
    this.setState({
      ethereumData,
      microsoftData,
      hasLoaded: true
    })
  }

  render() {
    const { ethereumData, microsoftData, hasLoaded } = this.state;
    if (!hasLoaded) return <Loader/>
    return (
      <div className="crypto-stock-compare">
        <h1>Crypto Stock Compare</h1>
        <section className="value-table">
          <h2>Ethereum</h2>
          <PriceTable priceData={ethereumData} />
        </section>
        <section className="value-table">
          <h2>Microsoft</h2>
          <PriceTable priceData={microsoftData} />
        </section>
      </div>
    );
  }
}
export default App;