import React, { createContext, useState } from "react";

interface contextInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const openMenuMobileContext = createContext<contextInterface | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

const OpenMenuMobileProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };
  return (
    <openMenuMobileContext.Provider value={value}>
      {children}
    </openMenuMobileContext.Provider>
  );
};

export { openMenuMobileContext, OpenMenuMobileProvider };
