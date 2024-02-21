import FormModal from "../Components/Form/FormModal";

export default {
    title: 'Components/Form/FormModal',
    component: FormModal,
    argTypes: {
        setIsModalOpen: {action: "setIsModalOpen"},
        setUserData: {action: "setUserData"},
    }
}
const Template = (args) => <FormModal {...args} />;

export const FormModalComp = Template.bind({});

FormModalComp.args = {
    userData: { name: "Kashif", gender: "M", role: "FSWD", maritalStatus: true },
    isModalOpen: true,
}