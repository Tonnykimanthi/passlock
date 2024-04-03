"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type ItemsList = {
  name: string;
  userName: string;
  password: string;
}[];

export type Context = {
  nameField: string;
  userNameField: string;
  passwordField: string;
  setNameField: Dispatch<SetStateAction<string>>;
  setUserNameField: Dispatch<SetStateAction<string>>;
  setPasswordField: Dispatch<SetStateAction<string>>;
  itemsList: ItemsList;
  setItemsList: Dispatch<
    SetStateAction<{ name: string; userName: string; password: string }[]>
  >;
  selectedItem: number;
  handleSelectedItem: (index: number) => void;
  formIsOpen: boolean;
  setFormIsOpen: Dispatch<SetStateAction<boolean>>;
  handleFormIsOpen: () => void;
  handleDeleteItem: () => void;
};

export const AppContext = createContext<Context | null>(null);

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [itemsList, setItemsList] = useState<ItemsList>([]);
  const [nameField, setNameField] = useState("");
  const [userNameField, setUserNameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [formIsOpen, setFormIsOpen] = useState(false)

  const handleSelectedItem = (index: number) => {
    setSelectedItem(index);
  };
  const handleFormIsOpen = () => {
    setFormIsOpen((prev) => !prev);
  };

  const handleDeleteItem = () => {
    const filteredItems = itemsList.filter(item => item !== itemsList[selectedItem])
    setItemsList(filteredItems)
    localStorage.setItem('itemsList', JSON.stringify(filteredItems))
    setSelectedItem(filteredItems.length - 1)
  }

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
        setFormIsOpen,
        handleFormIsOpen,
        handleDeleteItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextWrapper;
