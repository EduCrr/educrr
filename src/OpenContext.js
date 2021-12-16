import React, { useState, createContext } from "react";

export const OpenContext = createContext({});

function OpenProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </OpenContext.Provider>
  );
}

export default OpenProvider;
