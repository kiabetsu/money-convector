import React, { useEffect, useState } from "react";
import { VictoryLine, VictoryChart, VictoryScatter } from "victory";

function getDataForCurrency(data, inputCurrency, outputCurrency) {
    let newData = [];

    data.forEach((element) => {
        let inputCurrencyValue = element.currencies.find(
            (el) => el.currency == inputCurrency
        )?.value;

        let outputCurrencyValue = element.currencies.find(
            (el) => el.currency == outputCurrency
        )?.value;

        console.log(outputCurrency, inputCurrency);

        console.log(outputCurrencyValue, inputCurrencyValue);

        let newCurrency = (inputCurrencyValue / outputCurrencyValue).toFixed(2);

        let obj = { y: newCurrency, x: element.date };
        newData.push(obj);
    });
    return newData;
}

const data = [
    { y: 60, x: "Feb 23" },
    { y: 65, x: "Mar 23" },
    { y: 70, x: "Apr 23" },
    { y: 80, x: "May 23" },
    { y: 90, x: "Jun 23" },
];

const intepolation = "catmullRom";

function Chart({ moneys, inputCurrency, outputCurrency }) {
    const [data, setData] = useState([]);

    useEffect(
        () =>
            setData(getDataForCurrency(moneys, inputCurrency, outputCurrency)),
        [inputCurrency, outputCurrency, moneys]
    );

    console.log("data ept", data);
    return (
        <div className="chart-box">
            <VictoryChart>
                <VictoryLine
                    interpolation={intepolation}
                    data={data}
                    style={{ data: { stroke: "#c43a31" } }}
                />
                <VictoryScatter
                    data={data}
                    size={5}
                    style={{ data: { fill: "#c43a31" } }}
                />
            </VictoryChart>
        </div>
    );
}

export default Chart;
