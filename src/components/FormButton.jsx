import React from "react";

const FormButton = (props) => {
  const completeForm = () => {
    if (!props.formIsComplete) {
      props.updateForm(true);
    }
  };
  if (props.formIsComplete) {
    return (
      <button className="form-button continue-form-button" type="submit">
        {props.buttonText}
      </button>
    );
  } else {
    return (
      <button className="form-button" type="submit" onClick={completeForm}>
        {props.buttonText}
      </button>
    );
  }
};
export default FormButton;
