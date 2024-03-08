import React, { useEffect, useState } from "react";
import { FaRightLeft } from "react-icons/fa6";

function Convector(props) {
    const [moneyObj, setMoneyObj] = useState([]);
    const [valueStart, setValueStart] = useState();
    const [currencies, setCurrencies] = useState([]);
    const [inputCurrency, setInputCurrency] = useState("RUB");
    const [outputCurrency, setOutputCurrency] = useState("USD");
    const [valueFinal, setValueFinal] = useState(0);

    useEffect(() => {
        if (props.moneys.length > 0) {
            let curObj = props.moneys[0].currencies.map((item) => item);
            curObj.push({ currency: "RUB", value: 1 });
            setMoneyObj(curObj);
            setCurrencies(curObj.map((item) => item.currency));
        }
        const postAPI = (value, inCur, outCur) => {
            let coef1;
            console.log("dsadasdasdasdasd", moneyObj);
            for (let i = 0; i < moneyObj.length; i++) {
                if (inCur === moneyObj[i].currency) {
                    coef1 = moneyObj[i].value;
                }
            }
            let coef2;
            for (let i = 0; i < moneyObj.length; i++) {
                if (outCur === moneyObj[i].currency) {
                    coef2 = moneyObj[i].value;
                }
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
                    onChange={(e) => setInputCurrency(e.target.value)}
                    value={inputCurrency}
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
                    onChange={(e) => setOutputCurrency(e.target.value)}
                    value={outputCurrency}
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
