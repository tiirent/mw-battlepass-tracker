import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

var startDate = new Date(2020, 1, 11);
var endDate = new Date(2020, 3, 7);

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: getLevel()
    }
  }

  render() {
    return (
      <div>
        <header>
          {this.state.level}
          <TrackerBar />
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({level: getLevel()}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

class TrackerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: getLevel()
    }
  }

  render() {
    return (
      <div>
        <ProgressBar striped animated variant="dark" now = {this.state.level} />
      </div>
    );
  }
}

function getLevel() {
  var totalTime = endDate - startDate;
  var currentTime = Date.now() - startDate;
  return Math.abs(100 * (currentTime / totalTime)).toFixed(5);
}

export default Tracker;
