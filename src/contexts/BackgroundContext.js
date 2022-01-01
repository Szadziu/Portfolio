import { createContext, useState } from "react";

export const BackgroundContext = createContext({});

const BackgroundContextProvider = ({ children }) => {
  const [color, setColor] = useState("");

  const value = {
    color,
    setColor,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;
