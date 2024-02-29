"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type Context = {
  nameField: string;
  userNameField: string;
  passwordField: string;
  setNameField: Dispatch<SetStateAction<string>>;
  setUserNameField: Dispatch<SetStateAction<string>>;
  setPasswordField: Dispatch<SetStateAction<string>>;
  itemsList: {
    name: string;
    userName: string;
    password: string;
  }[];
  setItemsList: Dispatch<
    SetStateAction<{ name: string; userName: string; password: string }[]>
  >;
  selectedItem: number;
  handleSelectedItem: (index: number) => void;
  formIsOpen: boolean;
  handleFormIsOpen: () => void;
};

export const AppContext = createContext<Context | null>(null);

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [itemsList, setItemsList] = useState([
    {
      name: "Amazon",
      userName: "tonny-km",
      password: "Anthony9",
    },
  ]);
  const [nameField, setNameField] = useState("");
  const [userNameField, setUserNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [formIsOpen, setFormIsOpen] = useState(true);

  const handleSelectedItem = (index: number) => {
    setSelectedItem(index);
  };
  const handleFormIsOpen = () => {
    setFormIsOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        nameField,
        userNameField,
        passwordField,
        setNameField,
        setUserNameField,
        setPasswordField,
        itemsList,
        setItemsList,
        selectedItem,
        handleSelectedItem,
        formIsOpen,
        handleFormIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
