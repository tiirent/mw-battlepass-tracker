import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './scss/Tracker.scss'

var startDate = new Date(2020, 3, 8);
var endDate = new Date(2020, 5, 3);

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: getLevel()
    }
  }

  render() {
    return (
      <div className = "Tracker">
        <TrackerBar />
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
      level: getLevel(),
      margin: 0,
      value: parseInt(getLevel())
    }
  }

  render() {
    return (
      <div>
        <ProgressBar striped animated variant="dark" now = {this.state.value} label={this.state.level} />
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({level: getLevel()}), 1000);
    this.interval2 = setInterval(() => this.updateValue(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  updateValue() {
    this.setState({margin: this.state.margin + Math.PI/36});
    this.setState({value: parseInt(this.state.level) + Math.sin(this.state.margin)});
  }
}

function getLevel() {
  var totalTime = endDate - startDate;
  var currentTime = Date.now() - startDate;
  return Math.abs(100 * (currentTime / totalTime)).toFixed(2);
}

export default Tracker;
