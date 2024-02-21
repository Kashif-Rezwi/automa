import React from 'react'
import InputBox from './InputBox'

function CheckBox({ checkBoxLabel, handleChange, inputName, checkedValue, inputType, testId }) {
    return (
        <div>
            <label>{checkBoxLabel}</label>
            <InputBox 
                testId={testId}
                inputName={inputName}
                inputValue={checkedValue}
                inputType={inputType}
                handleChange={handleChange}
                placeholder=""
            />
        </div>
    )
}

export default CheckBox;