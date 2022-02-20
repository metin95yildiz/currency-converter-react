import React, { useState } from "react";
import "./Results.scss";
import cn from "classnames";

export default function Results({ currencyInfoResults }) {
    const [resultsModal, setResultsShow] = useState(false);
    setTimeout(() => {
        setResultsShow(true);
    }, 500)
    return (
        <div className={cn("results",
        {"show": resultsModal})}>
        <h2>Results</h2>
        {
            currencyInfoResults.error ?
            <div className={cn("form-group", "error")}>
                <p>{currencyInfoResults.error}</p>
            </div>
            :
            <div className="form-group">
                <span className="first-currency-info">
                    From: {currencyInfoResults.amount} {currencyInfoResults.firstCurrency}
                    </span>
                <div className="result">
                    To: {currencyInfoResults.result} {currencyInfoResults.secondCurrency}
                </div>
            </div>
        }

    </div>
    )
}