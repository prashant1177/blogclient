import { createContext, useState,useEffect } from "react";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("https://blogserver-two.vercel.app/profile", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        console.log("Fetched user info:", data); // Debugging
        setUserInfo(data);
      });
  }, []);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
  );
}
