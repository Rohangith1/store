import React, { useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const FormVal = () => {
  const {
    register,
    handleSubmit,
      formState: { errors },
    watch
    } = useForm();
    const password=watch("password")

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="container">
        <h1>Form Validation</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: "Name is Required" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Email is Required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email is Unvalid" },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "pass is required",
                minLength: {
                  value: 6,
                  message: "password should be more than 6 chac",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "confirm pass is required",
                validate: (value) =>
                  value === password || "Password do not match",
              })}
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
          <div>
            <label>Age: </label>
            <input type="text" name="age" />
            {errors.age}
          </div>
          <div>
            <label>Gender: </label>
            <select name="gender" id="">
              {" "}
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormVal;
