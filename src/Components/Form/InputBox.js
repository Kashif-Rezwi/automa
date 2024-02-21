import React from 'react'

function InputBox({ inputName, inputType, placeholder, inputValue, handleChange, testId }) {
    return (
        <input 
            data-testid={testId}
            onChange={handleChange}
            name={inputName}
            value={inputType !=="checkbox" ? inputValue : ""}
            checked={inputType === "checkbox" ? inputValue : ""}
            type={inputType}
            placeholder={placeholder}
        />
    )
}

export default InputBox