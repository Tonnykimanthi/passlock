"use client";

import { AppContext, Context } from "@/context/context";
import { useContext } from "react";

const AddItemForm = () => {
  const {
    nameField,
    userNameField,
    passwordField,
    setNameField,
    setUserNameField,
    setPasswordField,
    itemsList,
    setItemsList,
  } = useContext(AppContext) as Context;

  const handleSubmit = () => {
    setItemsList((prev) => [
      ...prev,
      {
        name: nameField,
        userName: userNameField,
        password: passwordField,
      },
    ]);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="user-name-email">Username/Email</label>
        <input
          type="text"
          name="user-name-email"
          value={userNameField}
          onChange={(e) => setUserNameField(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={passwordField}
          onChange={(e) => setPasswordField(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Post"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />
    </form>
  );
};

export default AddItemForm;
