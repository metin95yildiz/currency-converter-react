import React from "react";
import "./Input.scss";

export default function Input({
    type,
    classname,
    placeholder,
    min,
    name,
    submitText,
    onChange
}) {
    switch(type){
    case "number": return (
        <input type={type} className={classname} name={name}
        onChange={onChange} placeholder={placeholder} min={min} required />
    )
    default:
    case "submit": return (
        <input type={type} className={classname}  value={submitText} />
    )
    }

}
