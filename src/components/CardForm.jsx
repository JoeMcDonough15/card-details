import React from "react";
import FormField from "./FormField";
import FormButton from "./FormButton";

const CardForm = (props) => {
  return (
    <form className="form-container" action="">
      <FormField
        labelText="Cardholder Name"
        placeHolderText="e.g. Jane Appleseed"
      />
      <FormField
        labelText="Card Number"
        placeHolderText="e.g. 1234 5678 9123 0000"
      />
      <div className="form-bottom-row">
        <FormField labelText="Exp. Date" placeHolderText="MM" />
        <FormField labelText="(MM/YY)" placeHolderText="YY" />
        <FormField labelText="CVC" placeHolderText="e.g. 123" />
      </div>
      <FormButton
        formIsComplete={props.formIsComplete}
        updateForm={props.setFormIsComplete}
        buttonText="Confirm"
      />
    </form>
  );
};

export default CardForm;
