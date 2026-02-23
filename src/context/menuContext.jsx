import { createContext, useState } from "react";
import data from "../assets/data";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(data.menu);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
