import React, { useContext, createContext, useState } from 'react'
import { View } from 'react-native'

//instancia
const registerContext = createContext({
  addUser: (item) => {},
  users: []
})

//consumer
const userRegisterContext = () => useContext(registerContext)

//provider
export default function RegistersProvider({ children }) {
  const [users, setUsers] = useState([])

  function addUser(item) {
    setUsers([...users, item])
  }

  return <registerContext.Provider value={{ addUser, users }}>{children}</registerContext.Provider>
}

export { registerContext, userRegisterContext, RegistersProvider }
