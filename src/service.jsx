import React, { useState } from "react";
import axios from "axios";
import strftime from "strftime";

let currenciesGot = ["USD", "EUR", "CNY"];

const getData = async () => {
    let newMoney = [];
    for (let i = 0; i < 5; i++) {
        let today = new Date();
        today.setDate(today.getDate() - i);
        let formattedDate = `${today.getFullYear()}.${
            today.getMonth() + 1
        }.${today.getDate()}`;
        let formattedDateTrue = strftime("%F", today);
        try {
            let { data } = await axios
                .get(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/rub.json`
                )
                .catch(() => {});
            let obj = { date: formattedDateTrue };
            obj.currencies = [];
            currenciesGot = currenciesGot.map((value) => value.toLowerCase());
            obj.currencies = currenciesGot.map((x) => {
                return {
                    currency: x.toUpperCase(),
                    value: Number((1 / data.rub[x]).toFixed(2)),
                };
            });
            newMoney.push(obj);
        } catch {}
    }
    return newMoney;
};

export default getData;
