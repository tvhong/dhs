import React, { Component } from 'react';
import { Chart } from "react-google-charts";

export default class TrainingChart extends Component {
  options = {
    title: '2020 DH Soul Land Training Log',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  data = [
    ['Week', 'Bodyweight', 'Running', 'Total'],
    ['Feb 23', 1000, 400, 1400],
    ['2005', 1170, 460, 2000],
    ['2006', 660, 1120, 2000],
    ['2007', 1030, 540, 2200]
  ];

  render() {
    return (
      <Chart
        chartType="LineChart"
        data={this.data}
        options={this.options}
        width="80%"
        height="400px"
        legendToggle
      />
    )
  }
}

