import SelectBox from "../Components/Form/SelectBox";
import { actions } from "@storybook/addon-actions"

export default {
    title: "Components/Form/SelectBox",
    component: SelectBox,
    argTypes: {
        options: { type: "radio", options: ["Gender", "Male", "Female"] },
        handleChange: { action: "handleChange" },
        selectName: { control: "text" },
        selectValue: { control: "text" },
    },
}

const Template = (args) => <SelectBox {...args} />;

export const SelectBoxCop = Template.bind({});

SelectBoxCop.args = {
    options: ["Gender", "Male", "Female"], 
    selectName: "gender", 
    selectValue: "Gender",
}
