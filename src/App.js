import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GoogleChart from './components/GoogleChart';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showChart: false };
  }
  showChart = () => {
    this.setState({ showChart: true });
  }
  render() {
    return (
      <div>
        <Button onClick={this.showChart}>Load Google Chart</Button>
        {this.state.showChart && <GoogleChart />}
      </div>
    );
  }
}

export default App;
