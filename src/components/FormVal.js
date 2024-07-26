import React, { useState } from 'react'
import './form.css'

const FormVal = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");

    const validateForm = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Name is Requird';
        }
        if (!email) {
          errors.email = "Email is Requird";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email='Email is Unvalid'
        }
        if (!password) {
            errors.password='Password is Required'
        }else if (password.length<6) {
          errors.password = "password must be 6 characters";
        }

        if (!confirmPassword) {
          errors.confirmPassword = "confirm pass is Required";
        } else if (password !==confirmPassword) {
          errors.confirmPassword = "pasword must match";
        }

         if (!age) {
           errors.age = "age is Required";
         } else if (isNaN(age) || age < 18) {
           errors.age = "Age must be no. atleast 18";
        }
        
        if (!gender) {
          errors.gender = "Gender is required";
        }

        console.log(errors)
        return errors;
    }

    function handleSubmit(e) {
        e.preventDefault();
       

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);

        }else{
             console.log("submitted");
        }
        
    }
  return (
    <div>
      <div className="container">
        <h1>Form Validation</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {error.name}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {error.email}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error.password}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            {error.confirmPassword}
          </div>
          <div>
            <label>Age: </label>
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            {error.age}
          </div>
          <div>
            <label>Gender: </label>
            <select
              name=""
              id=""
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            >
              {" "}
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {error.gender}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormVal