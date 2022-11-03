import React, { useState } from "react";
import Header from "./Header";
import CardForm from "./CardForm";
import FormCompleted from "./FormCompleted";

const App = () => {
  const [formComplete, setFormState] = useState(false);
  return (
    <div>
      <Header formIsComplete={formComplete} />
      <main className="container">
        {formComplete ? (
          <FormCompleted formIsComplete={formComplete} />
        ) : (
          <CardForm
            formIsComplete={formComplete}
            setFormIsComplete={setFormState}
          />
        )}
      </main>
    </div>
  );
};

export default App;

//////////  <div className="row">
//    <Header formIsComplete={formComplete} />
//   <main className="container">
//       {formComplete ? (
//         <FormCompleted formIsComplete={formComplete} />
//       ) : (
//         <CardForm
///           formIsComplete={formComplete}
//           setFormIsComplete={setFormState}
//         />
//       )}
//     </main>
//   </div>
