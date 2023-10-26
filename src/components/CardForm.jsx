import React from "react";
import FormButton from "./FormButton";

const CardForm = (props) => {
  const userCardDetails = {};
  const handleChange = (event) => {
    userCardDetails[event.target.name] = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCardDetails(userCardDetails);
    props.setFormIsComplete(true);
  };
  return (
    <form className="form-container" action="" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="">
          Cardholder Name
        </label>
        <input
          className="form-input"
          name="cardHolder"
          onChange={handleChange}
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="">
          Card Number
        </label>
        <input
          className="form-input"
          name="cardNumber"
          onChange={handleChange}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </div>
      <div className="form-bottom-row">
        <div className="form-field">
          <label className="form-label" htmlFor="">
            Exp. Date
          </label>
          <input
            className="form-input"
            name="expirationMonth"
            onChange={handleChange}
            type="text"
            placeholder="MM"
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="">
            (MM/YY)
          </label>
          <input
            className="form-input"
            name="expirationYear"
            onChange={handleChange}
            type="text"
            placeholder="YY"
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="">
            CVC
          </label>
          <input
            className="form-input"
            name="cardCvc"
            onChange={handleChange}
            type="text"
            placeholder="e.g. 123"
          />
        </div>
      </div>
      <FormButton buttonText="confirm" />
    </form>
  );
};

export default CardForm;
