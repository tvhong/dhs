import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';

import config from "../config";

import TrainingChart from './TrainingChart'


export default class App extends Component {
  componentDidMount() {
    this.loadGoogleApi();
  }

  loadGoogleApi() {
    const self = this;
    window.gapi.load("client", function() {
      window.gapi.client.init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
      }).then(function () {
        self.getSheets();
      }, function(error) {
        console.log(JSON.stringify(error, null, 2));
      });
    });
  }

  getSheets() {
    window.gapi.client.sheets.spreadsheets.get({
      spreadsheetId: '1nTX_iMujMwrkfvRLKw_QD08SplmZ_QscN-0CGFLfuFI',
    }).then(function(response) {
      console.log(response);
      console.log(response);
    }, function(response) {
      console.log('Error: ' + response.result.error.message);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TrainingChart />
        </header>
      </div>
    );
  }
}
