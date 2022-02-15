import * as ACTION from "./actionTypes";

export function submitCurrencyConverter(currencyInfo) {
    return { type: ACTION.SUBMIT_CURRENCY_CONVERTER, currencyInfo}
}