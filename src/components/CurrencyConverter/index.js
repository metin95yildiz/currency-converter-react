import React, { useState } from "react";
import { connect } from "react-redux";
import SelectPicker from "../Selectpicker";
import Results from "../Results";
import Input from "../Input";
import { submitCurrencyConverter } from "../../store/actions";
import "./CurrencyConverter.scss";


function CurrencyConverter({ submitConverter, currencies, results }) {
    const [currencyInfo, setCurrencyInfo] = useState({
        firstCurrency: "",
        secondCurrency: "",
        amount: "",
    })
    function submit(event){
        event.preventDefault();
        submitConverter(currencyInfo);
    }
    return (
        <div className="content">
            <form id="currency-form" onSubmit={submit}>
                <div className="form-group-select">
                    <SelectPicker  name={"firstCurrency"} text={"First Currency"} onChange={(event) => setCurrencyInfo({
                        ...currencyInfo,
                        firstCurrency: event.target.value
                    })}>
                        <option disabled hidden>Choose</option>
                        {Object.values(currencies).map(currency => {
                            return <option key={currency}>
                                {currency}
                            </option>
                        })}
                    </SelectPicker>
                    <SelectPicker name={"secondCurrency"} text={"Second Currency"} onChange={(event) => setCurrencyInfo({
                        ...currencyInfo,
                        secondCurrency: event.target.value
                    })}>
                        <option disabled hidden>Choose</option>
                        {Object.values(currencies).map(currency => {
                            return <option key={currency}>
                                {currency}
                            </option>
                        })}
                    </SelectPicker>
                </div>
                <div className="form-group-amount">
                    <Input type="number" classname="amount" onChange={(event) => setCurrencyInfo({
                        ...currencyInfo,
                        amount: event.target.value
                    })} name="amount" placeholder="Amount" min="0"/>
                </div>
                <div className="form-group-submit">
                    <Input type="submit" classname="submit" submitText="Calculate"/>
                </div>
            </form>
            {results.firstCurrency || results.error ?
            <Results currencyInfoResults={results} />
            : <></>
            }
        </div>
    )
}

function mapStateToProps({ currencies, currencyInfo }) {
    return {
        currencies: currencies,
        results: currencyInfo
    }
}   

const mapDispatchToProps = {
    submitConverter: submitCurrencyConverter
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);