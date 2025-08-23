import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>User Registration</h1>

      {/* Uncomment one of the following lines to use the respective form */}

      {/* Use Controlled Components Form */}
      <RegistrationForm />

      {/* Use Formik Form */}
      {/* <FormikForm /> */}
    </div>
  );
};

export default App;
