import React from "react";
import FormButton from "./FormButton";
import iconComplete from "../images/icon-complete.svg";

const FormCompleted = (props) => {
  const handleSubmit = () => {
    props.setFormState(false);
    props.updateCardDetails(props.sampleCardDetails);
  };
  return (
    <section className="completed-form-container">
      <img
        src={iconComplete}
        alt="Check mark denoting form has been completed"
        className="check-mark-img"
      />
      <h2 className="completed-form-header">Thank You!</h2>
      <p className="completed-form-text">We've added your card details</p>
      <form action="" onSubmit={handleSubmit}>
        <FormButton buttonText="continue" />
      </form>
    </section>
  );
};

export default FormCompleted;
