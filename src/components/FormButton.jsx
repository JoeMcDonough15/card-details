import React from "react";

const FormButton = (props) => {
  const { buttonText, isSubmitButton, handleClick } = props;
  return isSubmitButton ? (
    <input className="form-button" type="submit" value={buttonText}></input>
  ) : (
    <button className="form-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
};
export default FormButton;
