import { Dispatch, SetStateAction, createContext, useState } from "react";
import ItemsList from "@/components/layout/Items";

type Context = {
  nameField: string;
  userNameField: string;
  passwordField: string;
  setNameField: Dispatch<SetStateAction<string>>
  setUserNameField: Dispatch<SetStateAction<string>>
  setPasswordField: Dispatch<SetStateAction<string>>
};

export const AppContext = createContext<Context | null>(null);

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [nameField, setNameField] = useState("Youtube");
  const [userNameField, setUserNameField] = useState("kimaxhtony@gmail.com");
  const [passwordField, setPasswordField] = useState("Anthony9");

  return (
    <AppContext.Provider
      value={{
        nameField,
        userNameField,
        passwordField,
        setNameField,
        setUserNameField,
        setPasswordField
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
