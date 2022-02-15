import React from "react";
import "./Selectpicker.scss";

export default function SelectPicker({ children, name, text, onChange }) {

    return (
        <div className="selectpicker-group">
            <label className="selectpicker-text" htmlFor={name}>{text}</label>
            <select defaultValue="Choose" title={name} className="selectpicker" name={name} onChange={onChange}>
                {children}
            </select>
        </div>
    )
}