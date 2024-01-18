import React from "react";

const FormButton = (props) => {
  return (
    <button
      className={
        props.buttonText === "continue"
          ? "continue-form-button form-button"
          : "form-button"
      }
    >
      {" "}
      <input className="submit-button-hidden-input" type="submit"></input>
      {props.buttonText}
    </button>
  );
};
export default FormButton;
