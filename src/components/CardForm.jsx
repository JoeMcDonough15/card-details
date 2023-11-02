import React from "react";
import FormButton from "./FormButton";

// no field can be blank

const blank = (charString) => {
  return charString.length === 0;
};

const containsLetter = (charString) => {
  const regex = new RegExp(/[A-Za-z]+/);
  return regex.test(charString);
};

const containsInvalidCharacters = (cardNumber) => {
  // must only be digits and no repeating white space characters (2 or more)
  return containsWhiteSpace(cardNumber, 2) || containsLetter(cardNumber);
};

const incorrectCardLength = (charString) => {
  // must be 19 characters long once spaced out
  return charString.length !== 19;
};

// Format card number as: \d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d

const spaceOutCharacters = (cardNumber) => {
  const cardNumberBlocks = cardNumber.match(/[\d]{1,4}/g);
  const newCardNumber = cardNumberBlocks.join(" ");
  return newCardNumber;
};

// MM, YY, and CVC fields may contain only digits

const containsNonDigit = (charString) => {
  const regex = new RegExp(/[^\d]+/);
  console.log("returning: ", regex.test(charString));
  return regex.test(charString);
};

// no white space for MM, YY, or CVC.

const containsWhiteSpace = (charString, quantifier) => {
  let regex;
  if (quantifier) {
    regex = new RegExp("[\\s]{" + quantifier + ",}");
  } else {
    regex = new RegExp(/[\s]+/);
  }
  return regex.test(charString);
};

const CardForm = (props) => {
  const userCardDetails = {};
  const handleChange = (event) => {
    // Regardless of input, it must not be empty; if so, raise error: "Can't be blank."
    if (blank(event.target.value)) {
      console.log("Can't be blank.");
      event.target.classList.add("warning", "warning-blank");
      return;
    } else {
      console.log("no longer blank! removing warning");
      event.target.classList.remove("warning", "warning-blank");
    }
    if (event.target.name === "cardHolder") {
      // must contain at least one letter character
      if (!containsLetter(event.target.value)) {
        console.log("Must contain at least one word character!");
        event.target.classList.add("warning", "warning-must-have-word-char");
        return;
      } else {
        console.log("Name includes word character! removing warning");
        event.target.classList.remove("warning", "warning-must-have-word-char");
      }
    }
    if (event.target.name === "cardNumber") {
      if (containsInvalidCharacters(event.target.value.toString())) {
        console.log("numbers only, wrong format");
        event.target.classList.add("warning", "warning-format");
        return;
      } else {
        console.log("removing warning of wrong format");
        event.target.classList.remove("warning", "warning-format");
        event.target.value = spaceOutCharacters(event.target.value);
      }

      if (incorrectCardLength(event.target.value.toString())) {
        console.log("invalid card number, incorrect length");
        event.target.classList.add("warning", "warning-incorrect-length");
        return;
      } else {
        console.log("Removing warning, card number is correct length");
        event.target.classList.remove("warning", "warning-incorrect-length");
      }
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
      // if it's too many digits, write code that cuts it off at correct num of digits
      // this can be reused for cardNumber.  give the number of characters as an int argument,
      // in this case, 2.
      if (event.target.value.length > 2) {
        event.target.value = event.target.value.toString().slice(2);
      }

      // const today = new Date();
      // if (event.target.name === "expirationYear") {
      //   const currentYear = today.getFullYear().toString().slice(2);
      //   if (Number(currentYear) > Number(event.target.value)) {
      //     // raise error - card expired
      //   } else if (Number(currentYear) === Number(event.target.value)) {
      //     // check month
      //   }
      // }
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
