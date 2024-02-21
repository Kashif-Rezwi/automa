import React from 'react'
import { Modal } from 'antd';
import PropTypes from 'prop-types'

function FormModal({ userData, isModalOpen, setIsModalOpen, setUserData, testId }) {
  const { name, gender, role, maritalStatus } = userData
  const handleClose = () => {
    setIsModalOpen(false);
    setUserData("")
  };

  return (
    <Modal data-testid={testId} title="Basic Modal" open={isModalOpen} onOk={handleClose} onCancel={handleClose}>
      <p>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p>Role: {role}</p>
      <p>Marital Status: {maritalStatus ? "Yes" : "No"}</p>
    </Modal>
  )
}

FormModal.propTypes = {
  userData: PropTypes.object,
  isModalOpen: PropTypes.bool,
  setIsModalOpen: PropTypes.func,
  setUserData: PropTypes.func,
}

export default FormModal;