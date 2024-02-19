"use client";

import { AppContext, Context } from "@/context/context";
import { useContext } from "react";
import InputField from "./InputField";

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
    if (nameField === "" || userNameField === "") {
      console.log("Name and Username are required");
    } else {
      setItemsList((prev) => [
        ...prev,
        {
          name: nameField,
          userName: userNameField,
          password: passwordField,
        },
      ]);
    }
  };

  return (
    <form
      className="[&>div>label]:text-whit -translate-x-1/ -translate-y-1/ absolute bottom-0 left-0 w-full max-w-md space-y-3 rounded-lg bg-primary p-5 [&>div]:flex [&>div]:flex-col"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={nameField}
          placeholder="Name"
          className="rounded border border-white py-2 pl-2 outline-none transition focus:border-secondary"
          onChange={(e) => setNameField(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="user-name-email">Username/Email</label>
        <input
          type="text"
          name="user-name-email"
          value={userNameField}
          placeholder="Username"
          className="rounded border border-white py-2 pl-2 outline-none transition focus:border-secondary"
          onChange={(e) => setUserNameField(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <InputField
          type="text"
          name="password"
          value={passwordField}
          placeholder="Password"
          className="rounded border border-white py-2 pl-2 outline-none transition focus:border-secondary"
          onChange={(e) => setPasswordField(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="mx-auto block w-32 cursor-pointer rounded bg-slate-800 py-2 text-white transition hover:bg-slate-950"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddItemForm;
