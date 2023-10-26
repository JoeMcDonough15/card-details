import React from "react";

const FormButton = (props) => {
  return (
    <button
      className={
        props.buttonText === "continue"
          ? "continue-form-button form-button"
          : "form-button"
      }
      type="submit"
    >
      {props.buttonText}
    </button>
  );
};
export default FormButton;
