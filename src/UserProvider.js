import React, { createContext,useState,useEffect } from 'react'


export const UserContext = createContext() 

function UserProvider({children}) {

  const [isLogin, setIsLogin]= useState(false)

  useEffect(() => {
    const dataLogin = JSON.parse(localStorage.getItem('isLogin'))
    setIsLogin(dataLogin)
  }, [])
  

  return (
    <UserContext.Provider value={{isLogin,setIsLogin}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider