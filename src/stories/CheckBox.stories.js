import CheckBox from "../Components/Form/CheckBox";

export default {
    title: "Components/Form/CheckBox",
    component: CheckBox,
}

export const CheckBoxComp = {}

CheckBoxComp.args = {
    checkBoxLabel: "Marital Status",
    inputName: "maritalStatus",
    checkedValue: false,
    inputType: "checkbox",
    handleChange: (e) => e.target.value
}