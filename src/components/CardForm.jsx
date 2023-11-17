import React from "react";
import FormButton from "./FormButton";

// no field can be blank
const blank = (charString) => {
  return charString.length === 0;
};

const containsDigit = (charString) => {
  const regex = new RegExp(/[\d]+/);
  return regex.test(charString);
};

const containsLetter = (charString) => {
  const regex = new RegExp(/[A-Za-z]+/);
  return regex.test(charString);
};

const containsInvalidCharacters = (cardNumber) => {
  // must only be digits and no repeating white space characters (2 or more), and no spaces at beginning or end
  return (
    containsWhiteSpace(cardNumber, 2) ||
    containsLetter(cardNumber) ||
    startsOrEndsWithSpace(cardNumber)
  );
};

const keepToMaxCharacters = (charString, max) => {
  const newCharString = charString.slice(0, max);
  return newCharString;
};

const startsOrEndsWithSpace = (charString) => {
  const regexStart = new RegExp(/^\s/);
  const regexEnd = new RegExp(/\s$/);
  return regexStart.test(charString) || regexEnd.test(charString);
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

const checkExpiration = () => {
  const monthElement = document.getElementById("month-input");
  const yearElement = document.getElementById("year-input");
  const currentMonth = new Date().getMonth();
  if (yearElement.value === "" || monthElement.value === "") {
    return;
  }
  if (Number(yearElement.value) < 23) {
    console.log("card expired");
  } else if (Number(yearElement.value) === 23) {
    if (Number(monthElement.value) - 1 <= currentMonth) {
      console.log("card expired");
    } else {
      console.log("card valid");
    }
  } else {
    console.log("card valid");
  }
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
  return regex.test(charString);
};

const monthInRange = (monthString) => {
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

    // Regardless of input, it must not be empty; if so, raise error: "Can't be blank."
    if (blank(event.target.value)) {
      console.log("Can't be blank.");
      event.target.classList.add("warning", "warning-blank");
      return;
    } else {
      console.log("no longer blank! removing warning");
      event.target.classList.remove("warning", "warning-blank");
    }
    if (inputName === "cardHolder") {
      // must contain at least one letter character
      if (containsDigit(event.target.value)) {
        console.log("Cannot contain digit!");
        event.target.classList.add("warning", "warning-no-digits");
        return;
      } else {
        console.log("Name includes word character! removing warning");
        event.target.classList.remove("warning", "warning-no-digits");
      }
    }
    if (inputName === "cardNumber") {
      if (event.target.value.length > 19) {
        event.target.value = keepToMaxCharacters(event.target.value, 19);
      }
      if (containsInvalidCharacters(event.target.value)) {
        console.log("numbers only, wrong format");
        event.target.classList.add("warning", "warning-format");
        return;
      } else {
        console.log("removing warning of wrong format");
        event.target.classList.remove("warning", "warning-format");
        event.target.value = spaceOutCharacters(event.target.value);
      }

      if (!correctStringLength(event.target.value, 19)) {
        console.log("invalid card number, too short");
        event.target.classList.add("warning", "warning-incorrect-length");
        return;
      } else {
        console.log("Removing warning, card number is correct length");
        event.target.classList.remove("warning", "warning-incorrect-length");
      }
    }
    if (inputName === "expirationMonth" || inputName === "expirationYear") {
      if (event.target.value.length > 2) {
        event.target.value = keepToMaxCharacters(event.target.value, 2);
      }
    }
    if (inputName === "expirationMonth") {
      if (!isValidMonth(event.target.value)) {
        console.log("invalid month");
        event.target.classList.add("warning", "invalid-month");
        return;
      } else {
        console.log("valid month");
        event.target.classList.remove("warning", "invalid-month");
      }
    }

    if (inputName === "expirationYear") {
      if (!isValidYear(event.target.value)) {
        console.log("invalid year");
        event.target.classList.add("warning", "invalid-year");
        return;
      } else {
        console.log("valid year");
        event.target.classList.remove("warning", "invalid-year");
      }
    }

    checkExpiration();

    userCardDetails[inputName] = event.target.value;
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
            id="month-input"
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
            id="year-input"
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
