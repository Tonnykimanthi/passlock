"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import ItemsList from "@/components/layout/Items";

export type Context = {
  nameField: string;
  userNameField: string;
  passwordField: string;
  setNameField: Dispatch<SetStateAction<string>>;
  setUserNameField: Dispatch<SetStateAction<string>>;
  setPasswordField: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<Context | null>(null);

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [nameField, setNameField] = useState("");
  const [userNameField, setUserNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  return (
    <AppContext.Provider
      value={{
        nameField,
        userNameField,
        passwordField,
        setNameField,
        setUserNameField,
        setPasswordField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
