import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

const GoogleChart = () => (
  <Chart
    chartType="LineChart"
    columns={[{"label":"time","type":"number"}, {"label":"Air Passengers","type":"number"}]}
    data={[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}
    rows={[[1949,11],[1949.08333333333,11],[1949.16666666667,13],[1949.25,12],[1949.33333333333,12]]}
    options={{"legend":true,"hAxis":{"title":"Time"},"vAxis":{"title":"Air Passengers"}}}
    width="100%"
    height="400px"
   />
);

export default GoogleChart;
