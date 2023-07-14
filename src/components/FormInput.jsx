import { useState } from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChanger = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChanger = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChanger = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChanger = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChanger = (event) => {
    setPassword(event.target.value);
  };

  const resetHandler = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmail("");
    setPassword("");
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(+age <= 0) {
        alert("Age must be greater than zero!");
        return;
    }
    if(!email.includes('@') || !email.includes('.')) {
        alert("Email must contain an @ and .");
        return;
    }
    props.onSubmitForm(firstName, lastName, age, email, password);
    console.log(firstName);
  };

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <form onSubmit={handleFormSubmit}>
          <div className={classes.input}>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChanger}
            />
          </div>
          <div className={classes.input}>
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChanger}
            />
          </div>
          <div className={classes.input}>
            <label>Age</label>
            <input type="number" value={age} onChange={handleAgeChanger} />
          </div>
          <div className={classes.input}>
            <label>Email Id</label>
            <input type="email" value={email} onChange={handleEmailChanger} />
          </div>
          <div className={classes.input}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChanger}
            />
          </div>
          <div className={classes.buttons}>
            <button type="reset" className={classes.btn} onClick={resetHandler}>
              Reset
            </button>
            <button
              type="submit"
              className={`${classes.btn} ${classes.btnPrimary}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default FormInput;
