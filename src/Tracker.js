import React from 'react';

var startDate = new Date(2020, 2, 11);
var endDate = new Date(2020, 4, 7);

class Tracker extends React.Component {
  render() {
    return (
      <div>
        <header>
          {getLevel()}
        </header>
      </div>
    );
  }
}

function getLevel() {
  var totalTime = endDate - startDate;
  var currentTime = Date.now() - startDate;
  return Math.abs(100 * (currentTime / totalTime));
}

export default Tracker;
