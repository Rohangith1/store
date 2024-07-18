import React, { useState } from "react";

const Form = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passwordd: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleName = (e) => {
  //     setName(e.target.value);
  // }
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  //  const handlePassword = (e) => {
  //    setPassword(e.target.value);
  // };
  function handleSubmit(event){
    event.prevetDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInput}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInput}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          name="passwordd"
          type="password"
          value={formData.passwordd}
          onChange={handleInput}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
