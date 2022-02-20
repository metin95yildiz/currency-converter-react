import React from "react";
import "./CurrencyList.scss";

export default function CurrencyList({ currencies }) {
    return (
        <div className="currency-list">
            <h2>Currency List</h2>
            <table className="currency-table">
                <thead>
                    <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(currencies).map(currencyCode => { return (
                            <tr>
                            <th scope="row">{currencyCode}</th>
                            <td>{currencies[currencyCode]}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}