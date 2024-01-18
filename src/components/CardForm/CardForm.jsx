import React from "react";
import FormButton from "../FormButton";
import blank from "./blank";
import containsNonDigit from "./containsNonDigit";
import containsNonDigitOrNonSpace from "./containsDigitOrNonSpace";
import containsNonNameCharacter from "./containsNonNameCharacter";
import containsRepeatingWhiteSpace from "./containsRepeatingWhiteSpace";
import correctStringLength from "./correctStringLength";
import keepToMaxCharacters from "./keepToMaxCharacters";
import monthInRange from "./monthInRange";
import spaceOutCharacters from "./spaceOutCharacters";
import startsOrEndsWithSpace from "./startsOrEndsWithSpace";

const cardIsExpired = () => {
  const monthElement = document.getElementById("month-input");
  const yearElement = document.getElementById("year-input");
  const dateWarningText = document.getElementById("date-warning");
  const dateElements = [monthElement, yearElement];
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const lastTwoDigitsOfYear = Number(currentYear.toString().slice(2));
  if (isInvalidMonth(monthElement) || isInvalidYear(yearElement)) {
    return;
  } else if (
    (Number(yearElement.value) < lastTwoDigitsOfYear ||
      Number(yearElement.value) === lastTwoDigitsOfYear) &&
    currentMonth + 1 >= Number(monthElement.value)
  ) {
    dateElements.forEach((element) => {
      element.classList.add("warning");
    });
    dateWarningText.innerText = "Card expired";
    dateWarningText.classList.add("warning-text-appear");
    return true;
  } else {
    dateElements.forEach((element) => {
      element.classList.remove("warning");
    });
    dateWarningText.classList.remove("warning-text-appear");
    return false;
  }
};

const isInvalidCardHolder = (element) => {
  const cardHolder = element.value;
  const cardHolderWarningText = document.getElementById("cardholder-warning");
  if (blank(cardHolder)) {
    element.classList.add("warning");
    cardHolderWarningText.innerText = "Can't be blank";
    cardHolderWarningText.classList.add("warning-text-appear");
    return true;
  } else if (
    containsNonNameCharacter(cardHolder) ||
    containsRepeatingWhiteSpace(cardHolder) ||
    startsOrEndsWithSpace(cardHolder)
  ) {
    element.classList.add("warning");
    cardHolderWarningText.innerText = "Invalid name";
    cardHolderWarningText.classList.add("warning-text-appear");
    return true;
  } else {
    element.classList.remove("warning");
    cardHolderWarningText.classList.remove("warning-text-appear");
    return false;
  }
};

const isInvalidCardNumber = (element) => {
  const cardNumber = element.value;
  const cardNumberWarningText = document.getElementById("cardnumber-warning");
  if (blank(cardNumber)) {
    element.classList.add("warning");
    cardNumberWarningText.innerText = "Can't be blank";
    cardNumberWarningText.classList.add("warning-text-appear");
    return true;
  } else if (
    containsNonDigitOrNonSpace(cardNumber) ||
    containsRepeatingWhiteSpace(cardNumber) ||
    startsOrEndsWithSpace(cardNumber)
  ) {
    element.classList.add("warning");
    cardNumberWarningText.innerText = "Numbers only, wrong format";
    cardNumberWarningText.classList.add("warning-text-appear");
    return true;
  } else if (!correctStringLength(cardNumber, 19)) {
    element.classList.add("warning");
    cardNumberWarningText.innerText = "Incorrect card number length";
    cardNumberWarningText.classList.add("warning-text-appear");
    return true;
  } else {
    element.classList.remove("warning");
    cardNumberWarningText.classList.remove("warning-text-appear");
    return false;
  }
};

const isInvalidMonth = (element) => {
  const monthString = element.value;
  const dateWarningText = document.getElementById("date-warning");
  const yearInput = document.getElementById("year-input");
  if (blank(monthString)) {
    element.classList.add("warning");
    dateWarningText.innerText = "Can't be blank";
    dateWarningText.classList.add("warning-text-appear");
    return true;
  } else if (
    containsNonDigit(monthString) ||
    !correctStringLength(monthString, 2) ||
    !monthInRange(monthString)
  ) {
    element.classList.add("warning");
    dateWarningText.innerText = "Invalid month";
    dateWarningText.classList.add("warning-text-appear");
    return true;
  } else if (Array.from(yearInput.classList).includes("warning")) {
    element.classList.remove("warning");
    isInvalidYear(yearInput);
  } else {
    element.classList.remove("warning");
    dateWarningText.classList.remove("warning-text-appear");
    return false;
  }
};

const isInvalidYear = (element) => {
  const dateWarningText = document.getElementById("date-warning");
  const monthInput = document.getElementById("month-input");
  const yearString = element.value;
  if (blank(yearString)) {
    element.classList.add("warning");
    dateWarningText.innerText = "Can't be blank";
    dateWarningText.classList.add("warning-text-appear");
    return true;
  } else if (
    containsNonDigit(yearString) ||
    !correctStringLength(yearString, 2)
  ) {
    element.classList.add("warning");
    dateWarningText.innerText = "Invalid year";
    dateWarningText.classList.add("warning-text-appear");
    return true;
  } else if (Array.from(monthInput.classList).includes("warning")) {
    element.classList.remove("warning");
    isInvalidMonth(monthInput);
  } else {
    element.classList.remove("warning");
    dateWarningText.classList.remove("warning-text-appear");
    return false;
  }
};
const isInvalidCvc = (element) => {
  const cardCvc = element.value;
  const cvcWarningText = document.getElementById("cvc-warning");
  if (blank(cardCvc)) {
    element.classList.add("warning");
    cvcWarningText.innerText = "Can't be blank";
    cvcWarningText.classList.add("warning-text-appear");
    return true;
  } else if (containsNonDigit(cardCvc)) {
    element.classList.add("warning");
    cvcWarningText.innerText = "Invalid cvc";
    cvcWarningText.classList.add("warning-text-appear");
    return true;
  } else if (!correctStringLength(cardCvc, 3)) {
    element.classList.add("warning");
    cvcWarningText.innerText = "Invalid cvc";
    cvcWarningText.classList.add("warning-text-appear");
    return true;
  } else {
    element.classList.remove("warning");
    cvcWarningText.classList.remove("warning-text-appear");
    return false;
  }
};

const CardForm = (props) => {
  const handleFormValidation = (event) => {
    const inputName = event.target.name;
    if (inputName === "cardHolder") {
      isInvalidCardHolder(event.target);
      return;
    }
    if (inputName === "cardNumber") {
      if (event.target.value.length > 19) {
        event.target.value = keepToMaxCharacters(event.target.value, 19);
      }
      event.target.value = spaceOutCharacters(event.target.value);
      isInvalidCardNumber(event.target);
      return;
    }
    if (inputName === "expirationMonth" || inputName === "expirationYear") {
      if (event.target.value.length > 2) {
        event.target.value = keepToMaxCharacters(event.target.value, 2);
      }
    }
    if (inputName === "expirationMonth") {
      isInvalidMonth(event.target);
      cardIsExpired();
      return;
    }
    if (inputName === "expirationYear") {
      isInvalidYear(event.target);
      cardIsExpired();
      return;
    }
    if (inputName === "cardCvc") {
      event.target.value = keepToMaxCharacters(event.target.value, 3);
      isInvalidCvc(event.target);
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputElements = Array.from(
      document.getElementsByClassName("form-input")
    );
    const warning = inputElements.some((element) => {
      return (
        Array.from(element.classList).includes("warning") ||
        element.value === ""
      );
    });
    if (warning) {
      return;
    }
    const userCardDetails = {};
    inputElements.forEach((inputElement) => {
      userCardDetails[inputElement.name] = inputElement.value;
    });
    props.updateCardDetails(userCardDetails);
    props.setFormState(true);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-field" id="cardHolder-parent">
        <label className="form-label" htmlFor="cardHolder">
          Cardholder Name
        </label>
        <input
          id="cardHolder"
          className="form-input"
          name="cardHolder"
          onClick={handleFormValidation}
          onChange={handleFormValidation}
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <p
          id="cardholder-warning"
          className="cardholder-warning-text warning-text"
        >
          Can't be blank
        </p>
      </div>
      <div className="form-field" id="cardNumber-parent">
        <label className="form-label" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          id="cardNumber"
          className="form-input"
          name="cardNumber"
          onClick={handleFormValidation}
          onChange={handleFormValidation}
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <p
          id="cardnumber-warning"
          className="cardnumber-warning-text warning-text"
        >
          Can't be blank
        </p>
      </div>
      <div className="form-bottom-row">
        <div className="date-container">
          <div className="month-year-row">
            <div className="form-field" id="expirationMonth-parent">
              <label className="form-label" htmlFor="month-input">
                Exp. Date
              </label>
              <input
                id="month-input"
                className="form-input"
                name="expirationMonth"
                onClick={handleFormValidation}
                onChange={handleFormValidation}
                type="text"
                placeholder="MM"
              />
            </div>
            <div className="form-field" id="expirationYear-parent">
              <label className="form-label" htmlFor="year-input">
                (MM/YY)
              </label>
              <input
                id="year-input"
                className="form-input"
                name="expirationYear"
                onClick={handleFormValidation}
                onChange={handleFormValidation}
                type="text"
                placeholder="YY"
              />
            </div>
          </div>
          <p id="date-warning" className="date-warning-text warning-text">
            Can't be blank
          </p>
        </div>
        <div className="form-field form-field-cvc" id="cardCvc-parent">
          <label className="form-label" htmlFor="cardCvc">
            CVC
          </label>
          <input
            id="cardCvc"
            className="form-input"
            name="cardCvc"
            onClick={handleFormValidation}
            onChange={handleFormValidation}
            type="text"
            placeholder="e.g. 123"
          />
          <p id="cvc-warning" className="cvc-warning-text warning-text">
            Can't be blank
          </p>
        </div>
      </div>
      <FormButton buttonText="confirm" />
    </form>
  );
};

export default CardForm;
