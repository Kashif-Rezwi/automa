import React from 'react'
import PropTypes from 'prop-types'

function SelectBox({ options, handleChange, selectName, selectValue, testId }) {
    return (
        <select data-testid={testId} onChange={handleChange} name={selectName} value={selectValue} >
            {
                options.map(value => <option value={value}>{value}</option>)
            }
        </select>
    )
}

SelectBox.propTypes = {
    options: PropTypes.oneOf(["Gender", "Male", "Female"]),
    handleChange: PropTypes.func,
    selectName: PropTypes.string,
    selectValue: PropTypes.string,
}

export default SelectBox;