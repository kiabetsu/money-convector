import React, { useEffect, useState } from "react";
import axios from "axios";
import strftime from "strftime";
import getData from "../service";

function Exchange_rates({ moneys }) {
    console.log(moneys);
    return (
        <div className="exchange-table">
            <div className="table-header">
                <div className="table-currency">Валюта</div>
                <div className="table-value">Цена</div>
                <div className="table-state">Изменения</div>
            </div>
            {moneys.length > 0 &&
                moneys[0].currencies.map((value, i) => {
                    let state = Number(
                        (value.value - moneys[1].currencies[i].value).toFixed(2)
                    );
                    return (
                        <div className="table-line">
                            <div className="table-currency">
                                {value.currency}
                            </div>
                            <div className="table-value">{value.value}</div>
                            <div
                                className={
                                    state < 0
                                        ? "table-state-minus"
                                        : "table-state-plus"
                                }
                            >
                                {state > 0 ? "+" : ""}
                                {state}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Exchange_rates;
