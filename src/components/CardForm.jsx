import React from "react";
import FormButton from "./FormButton";

const CardForm = (props) => {
  const spaceOutCardNumber = (cardNumber) => {
    const cardNumberBlocks = cardNumber.match(/\d{1,4}/g);
    const newCardNumber = cardNumberBlocks.join(" ");
    return newCardNumber;
  };
  const userCardDetails = {};
  const handleChange = (event) => {
    // Regardless of input, it must not be empty; if so, raise error: "Can't be blank."
    if (event.target.value.length === 0) {
      console.log("Can't be blank.");
      event.target.classList.add("warning", "warning-blank");
    }
    if (event.target.name === "cardHolder") {
      // cannot be empty and must include at least one \S character
    }
    if (event.target.name === "cardNumber") {
      event.target.value = spaceOutCardNumber(event.target.value);
    }
    if (
      event.target.name === "expirationMonth" ||
      event.target.name === "expirationYear"
    ) {
      // must be exactly 2 characters long; if it's 1 digit, raise error: "Must be 2 digits"
      if (event.target.value.length === 1) {
        console.log("warning for 1 digit would be added");
        event.target.classList.add("warning", "warning-one-digit");
      } else if (event.target.value.length === 2) {
        console.log("warning fr 1 digit would be removed");
        event.target.classList.remove("warning", "warning-one-digit");
      }
      // if it's 3+ digits, write code that cuts it off at 2 digits
      if (event.target.value.length > 2) {
        event.target.value = event.target.value.toString().slice(2);
      }
      // must be only \d characters; if not, raise error: "Wrong format, numbers only"
      const regex = new RegExp(/[^\d]+/);
      if (regex.test(event.target.value.toString())) {
        console.log("wrong format, numbers only");
        event.target.classList.add("warning", "warning-wrong-format");
      }
      const today = new Date();
      if (event.target.name === "expirationYear") {
        const currentYear = today.getFullYear().toString().slice(2);
        if (Number(currentYear) > Number(event.target.value)) {
          // raise error - card expired
        } else if (Number(currentYear) === Number(event.target.value)) {
          // check month
        }
      }
    }

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
