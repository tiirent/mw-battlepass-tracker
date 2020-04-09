import React from 'react';

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
      <div>
        <header>
          {this.state.level}
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

function getLevel() {
  var totalTime = endDate - startDate;
  var currentTime = Date.now() - startDate;
  return Math.abs(100 * (currentTime / totalTime)).toFixed(5);
}

export default Tracker;
