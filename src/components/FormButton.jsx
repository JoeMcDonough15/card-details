import React from "react";

const FormButton = (props) => {
  const { buttonText, isSubmitButton } = props;
  return isSubmitButton ? (
    <input className="form-button" type="submit" value={buttonText}></input>
  ) : (
    <button className="form-button continue-form-button">{buttonText}</button>
  );
};
export default FormButton;
