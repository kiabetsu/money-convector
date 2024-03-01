import React, { useState } from "react";
import axios from "axios";
import strftime from "strftime";

let currenciesGot = ["UsD", "EUR", "CNY"];

const getData = async () => {
    let newMoney = [];
    for (let i = 0; i < 5; i++) {
        let today = new Date();
        today.setDate(today.getDate() - i);
        let formattedDate = strftime("%F", today);
        let { data } = await axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${formattedDate}/currencies/rub.json`
        );
        let obj = { date: formattedDate };
        obj.currencies = [];
        currenciesGot = currenciesGot.map((value) => value.toLowerCase());
        obj.currencies = currenciesGot.map((x) => {
            return {
                currency: x.toUpperCase(),
                value: Number((1 / data.rub[x]).toFixed(2)),
            };
        });
        newMoney.push(obj);
    }
    console.log(newMoney);
    return newMoney;
};

export default getData;
