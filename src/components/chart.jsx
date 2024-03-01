import React from "react";
import {VictoryLine, VictoryChart, VictoryScatter} from "victory";

const data = [
    { y: 60, x:'Feb 23' },
    { y: 65, x:'Mar 23' },
    { y: 70, x:'Apr 23' },
    { y: 80, x:'May 23' },
    { y: 90, x:'Jun 23' },
]

const intepolation = 'catmullRom';

function Chart() {
    return (
        <VictoryChart height={390}>
        <VictoryLine
            domain={{ y: [0, 100]}}
            interpolation={intepolation} data={data}
            style={{ data: { stroke: "#c43a31" } }}
        />
        <VictoryScatter data={data}
          size={5}
          style={{ data: { fill: "#c43a31" } }}
        />
      </VictoryChart>
    );
}

export default Chart;