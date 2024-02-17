import React, { createContext, useState } from "react"

type Context = {
  name: string,
  userName: string,
  password: string
}

const AppContext = createContext<Context | null>(null)

const context = ({children}: {children: React.ReactNode}) => {
  const [name, setName] = useState("Youtube")
  const [userName, setUserName] = useState("kimaxhtony@gmail.com")
  const [password, setPassword] = useState("Anthony9")

  return (
      <AppContext.Provider value={
        {
          name,
          userName,
          password
        }
      }>
        {children}
      </AppContext.Provider>
  )
}

export default context