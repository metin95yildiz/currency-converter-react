import {
    COMPLETE_CURRENCY_CONVERTER,
    FAIL_CURRENCY_CONVERTER
} from "../actions/actionTypes";

const initial = {
    firstCurrency: "",
    secondCurrency: "",
    amount: "",
    result: "",
    error: ""
}

export default function currencyInfo(state = initial, action) {
    switch(action.type) {
        case COMPLETE_CURRENCY_CONVERTER: return {
                ...state,
                firstCurrency: action.firstCurrency,
                secondCurrency: action.secondCurrency,
                amount: action.amount,
                result: action.result
            }
        case FAIL_CURRENCY_CONVERTER: return {
            ...state,
            error: action.error
        }
        default: return state;
    }
}