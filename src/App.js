import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image2.png';

import ViDeo from "./video/globe.mp4";


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
          <video autoPlay loop muted
          style={{
          position: "absolute",
          width: "auto",
          left: "50%",
          top: "50%",
          height: "auto",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1"
          }}>
            <source src={ViDeo} type="video/mp4"/>
          </video>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;