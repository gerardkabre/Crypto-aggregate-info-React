import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Price',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(108, 174, 255, 0.2)'
            ],
            borderColor: [
                'rgba(108, 174, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
    
    return (
      <div className="chart">
        <Line
          data={data}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default Chart;


