import { useState } from "react";

import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
import UserDetails from "./components/UserDetails";

function App() {
  const [formStatus, setFormStatus] = useState(false);

  const [user, setUser] = useState({});

  const uponFromSubmission = (firstName, lastName, age, email, password) => {
    setUser((prevUser) => {
      let updatedUser = {...prevUser};
      updatedUser = {
        ufName: firstName,
        ulName: lastName,
        uage: age,
        uemail: email,
        upassword: password,
      };
      return updatedUser;
    });
    setFormStatus(true);
  };

  return (
    <div>
      <Navbar />
      {!formStatus && <FormInput onSubmitForm={uponFromSubmission} />}
      {formStatus && <UserDetails user={user} />}
    </div>
  );
}

export default App;