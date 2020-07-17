import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("hey");
  }, []);

  useEffect(() => {
    // console.log("formState  cambió! ");
  }, [formState]);

  useEffect(() => {
    // console.log("email  cambió! ");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="name"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="name"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
