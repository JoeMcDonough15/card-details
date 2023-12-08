import React, { useState } from "react";
import Header from "./Header";
import CardForm from "./CardForm/CardForm";
import FormCompleted from "./FormCompleted";

const App = () => {
  const [formComplete, setFormState] = useState(false);
  const sampleDetails = {
    cardHolder: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    expirationMonth: "00",
    expirationYear: "00",
    cardCvc: "000",
  };
  const [cardDetails, setCardDetails] = useState(sampleDetails);
  return (
    <div>
      <Header cardDetails={cardDetails} />
      <main className="container">
        {formComplete ? (
          <FormCompleted
            setFormState={setFormState}
            updateCardDetails={setCardDetails}
            sampleCardDetails={sampleDetails}
          />
        ) : (
          <CardForm
            setFormState={setFormState}
            updateCardDetails={setCardDetails}
          />
        )}
      </main>
    </div>
  );
};

export default App;
