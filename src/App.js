import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/header";
import Exchange_rates from "./components/exchange_rates";
import Convector from "./components/convector";
import Chart from "./components/chart";
import getData from "./service";

function App() {
    const [moneys, setMoneys] = useState([]);
    const [inputCurrency, setInputCurrency] = useState("RUB");
    const [outputCurrency, setOutputCurrency] = useState("USD");

    useEffect(() => {
        getData().then((data) => {
            console.log("data:", data);
            setMoneys(data);
        });
    }, []);

    return (
        <div className="app-container">
            <div className="slider-thumb"></div>

            {/* <Header /> */}
            <Exchange_rates moneys={moneys} />
            <Convector
                moneys={moneys}
                setInputCurrency={setInputCurrency}
                inputCurrency={inputCurrency}
                setOutputCurrency={setOutputCurrency}
                outputCurrency={outputCurrency}
            />
            <Chart
                moneys={moneys}
                outputCurrency={outputCurrency}
                inputCurrency={inputCurrency}
            />
        </div>
    );
}

export default App;
