import React, { useEffect, useState } from "react";
import { FaRightLeft } from "react-icons/fa6";

function Convector(props) {
    console.log("convector ", props);
    const [valueStart, setValueStart] = useState();
    const [currencies, setCurrencies] = useState([]);

    const [inputCurrency, setInputCurrency] = useState(0);
    const [outputCurrency, setOutputCurrency] = useState(0);
    const [valueFinal, setValueFinal] = useState(0);

    useEffect(() => {
        if (props.moneys.length > 0) {
            let cur = props.moneys[0].currencies.map((item) => item.currency);
            cur.push("RUB");
            setCurrencies(cur);
        }
        const postAPI = (value, inCur, outCur) => {
            let coef1;
            switch (inCur) {
                case 0:
                    coef1 = 100;
                    break;
                case 1:
                    coef1 = 40;
                    break;
                case 2:
                    coef1 = 50;
                    break;
            }
            let coef2;
            switch (outCur) {
                case 0:
                    coef2 = 100;
                    break;
                case 1:
                    coef2 = 40;
                    break;
                case 2:
                    coef2 = 50;
                    break;
            }
            return (value * coef1) / coef2;
        };

        setValueFinal(postAPI(valueStart, inputCurrency, outputCurrency));
    }, [valueStart, inputCurrency, outputCurrency, props.moneys]);

    return (
        <div className="converter-container">
            <div className="input-currency-container">
                <input
                    type="text"
                    className="input-value"
                    onChange={(e) => setValueStart(e.target.value)}
                />
                <select
                    className="select-currency"
                    onChange={(e) => setInputCurrency(e.target.selectedIndex)}
                >
                    {currencies.map((e, i) => (
                        <option key={i}>{e}</option>
                    ))}
                </select>
            </div>
            <FaRightLeft />
            <div className="input-currency-container">
                <input
                    type="text"
                    className="input-value"
                    value={!isNaN(valueFinal) ? valueFinal : ""}
                    readOnly
                />
                <select
                    className="select-currency"
                    onChange={(e) => setOutputCurrency(e.target.selectedIndex)}
                >
                    {currencies.map((e, i) => (
                        <option key={i}>{e}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Convector;
