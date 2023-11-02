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

// const incorrectCardLength = (charString) => {
//   // must be 19 characters long once spaced out
//   return charString.length !== 19;
// };

const keepToTwoCharacters = (charString) => {
  if (charString.length > 2) {
    charString = charString.slice(2);
  }
  return charString;
};

const correctStringLength = (charString, correctStringLength) => {
  return charString.length === correctStringLength;
};

const isValidMonth = (monthString) => {
  return (
    !containsNonDigit(monthString) &&
    correctStringLength(monthString, 2) &&
    monthInRange(monthString)
  );
};

const isValidYear = (yearString) => {
  return !containsNonDigit(yearString) && correctStringLength(yearString, 2);
};

const spaceOutCharacters = (cardNumber) => {
  // Format card number as: \d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d
  const cardNumberBlocks = cardNumber.match(/[\d]{1,4}/g);
  const newCardNumber = cardNumberBlocks.join(" ");
  return newCardNumber;
};

const containsNonDigit = (charString) => {
  // MM, YY, and CVC fields may contain only digits
  const regex = new RegExp(/[^\d]+/);
  console.log("returning: ", regex.test(charString));
  return regex.test(charString);
};

const monthInRange = (monthString) => {
  console.log("month: ", monthString);
  console.log("month in range: ", Number(monthString) <= 12);
  return Number(monthString) <= 12;
};

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
    const inputName = event.target.name;
    const inputValue = event.target.value.toString();

    // Regardless of input, it must not be empty; if so, raise error: "Can't be blank."
    if (blank(inputValue)) {
      console.log("Can't be blank.");
      event.target.classList.add("warning", "warning-blank");
      return;
    } else {
      console.log("no longer blank! removing warning");
      event.target.classList.remove("warning", "warning-blank");
    }
    if (inputName === "cardHolder") {
      // must contain at least one letter character
      if (!containsLetter(inputValue)) {
        console.log("Must contain at least one word character!");
        event.target.classList.add("warning", "warning-must-have-word-char");
        return;
      } else {
        console.log("Name includes word character! removing warning");
        event.target.classList.remove("warning", "warning-must-have-word-char");
      }
    }
    if (inputName === "cardNumber") {
      if (containsInvalidCharacters(inputValue)) {
        console.log("numbers only, wrong format");
        event.target.classList.add("warning", "warning-format");
        return;
      } else {
        console.log("removing warning of wrong format");
        event.target.classList.remove("warning", "warning-format");
        event.target.value = spaceOutCharacters(inputValue);
      }

      if (!correctStringLength(inputValue, 19)) {
        console.log("invalid card number, incorrect length");
        event.target.classList.add("warning", "warning-incorrect-length");
        return;
      } else {
        console.log("Removing warning, card number is correct length");
        event.target.classList.remove("warning", "warning-incorrect-length");
      }
    }
    if (inputName === "expirationMonth") {
      event.target.value = keepToTwoCharacters(inputValue);

      if (!isValidMonth(inputValue)) {
        console.log("invalid month");
        event.target.classList.add("warning", "invalid-month");
        return;
      } else {
        console.log("valid month");
        event.target.classList.remove("warning", "invalid-month");
      }
    }

    if (inputName === "expirationYear") {
      event.target.value = keepToTwoCharacters(inputValue);
      if (!isValidYear(inputValue)) {
        console.log("invalid year");
        event.target.classList.add("warning", "invalid-year");
        return;
      } else {
        console.log("valid year");
        event.target.classList.remove("warning", "invalid-year");
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
