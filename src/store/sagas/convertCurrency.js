import { put, call, take, spawn } from "redux-saga/effects"
import {
    SUBMIT_CURRENCY_CONVERTER,
    START_CURRENCY_CONVERTER,
    COMPLETE_CURRENCY_CONVERTER,
    FAIL_CURRENCY_CONVERTER
} from "../actions/actionTypes";
import axios from "axios";

export function * convertCurrency() {
    const api_key = "8c252c153d8c16f369a281c04926cf5f"; // User API Key
    const url = "http://data.fixer.io/api/latest?access_key=" + api_key; //Fixer.io

    const { currencyInfo } = yield take(SUBMIT_CURRENCY_CONVERTER);
    
    
    yield put ({ type: START_CURRENCY_CONVERTER });
    try {
        const response = yield call(axios.get, url);
        const rates = response.data["rates"];
        const firstValue = rates[currencyInfo.firstCurrency];
        const secondValue = rates[currencyInfo.secondCurrency];
        const result = parseFloat((secondValue/ firstValue) * currencyInfo.amount).toFixed(2);
        yield put({
            type: COMPLETE_CURRENCY_CONVERTER,
            firstCurrency: currencyInfo.firstCurrency,
            secondCurrency: currencyInfo.secondCurrency,
            amount: currencyInfo.amount,
            result
        })
    } catch (error) {
        yield put ({
            type: FAIL_CURRENCY_CONVERTER,
            error: "An error occured. Please try again later..."
        })
    } finally {
        yield spawn(convertCurrency);
    }
}