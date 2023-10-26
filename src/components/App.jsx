import React, { useState } from "react";
import Header from "./Header";
import CardForm from "./CardForm";
import FormCompleted from "./FormCompleted";

const App = () => {
  const [formComplete, setFormComplete] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardHolder: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    expirationMonth: "00",
    expirationYear: "00",
    cardCvc: "000",
  });
  return (
    <div>
      <Header cardDetails={cardDetails} />
      <main className="container">
        {formComplete ? (
          <FormCompleted />
        ) : (
          <CardForm
            setFormIsComplete={setFormComplete}
            updateCardDetails={setCardDetails}
          />
        )}
      </main>
    </div>
  );
};

export default App;
