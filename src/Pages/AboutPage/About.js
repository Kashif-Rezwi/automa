import "./about.css"
import { useState } from "react";
import FormModal from "../../Components/Form/FormModal";
import InputBox from "../../Components/Form/InputBox";
import SelectBox from "../../Components/Form/SelectBox";
import CheckBox from "../../Components/Form/CheckBox";

const initial = {
  name: "",
  gender: "",
  role: "",
  maritalStatus: false
};


function About() {
  const [formData, setFormData] = useState(initial);
  const [userData, setUserData] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({...formData});
    setFormData(initial);
    showModal()
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="form-container">
        <div className="form-wrapper">
          <h1>Form</h1>
          <form onSubmit={handleSubmit} className="form">
            <InputBox
              testId="input-name"
              inputName="name"
              inputValue={formData.name}
              inputType="text"
              placeholder="Name"
              handleChange={handleChange}
            />

            <SelectBox testId="select-gender" options={["Gender", "Male", "Female"]} handleChange={handleChange} selectName={"gender"} selectValue={formData.gender} />

            <SelectBox testId="select-role" options={["Role", "FrontEnd Developer", "Backend Developer", "Full stack Developer"]} handleChange={handleChange} selectName={"role"} selectValue={formData.role} />
            
            <CheckBox
              testId="check-marital-status"
              checkBoxLabel={"Marital Status"}
              inputName="maritalStatus"
              checkedValue={formData.maritalStatus}
              inputType="checkbox"
              handleChange={handleChange}
            />

            <input type="Submit" data-testid="form-submit-button" />
          </form>
        </div>
      </div>
      {
        userData && <FormModal
          userData={userData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setUserData={setUserData}
        />
      }
    </>
  );
};


export default About;
