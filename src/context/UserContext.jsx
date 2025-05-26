import { createContext, useContext, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ Children }) => {
  const [gender, setGender] = useState("");

  return (
    <UserContext.Provider value={{ gender, setGender }}>
      {Children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);