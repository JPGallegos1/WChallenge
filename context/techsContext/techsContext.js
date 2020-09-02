import { createContext, useEffect, useContext, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const URL = `http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs`;
export const TechsContext = createContext();

export const TechsProvider = ({ children }) => {
  const [searchTech, setSearchTech] = useState("");
  const [sortTech, setSortTech] = useState("");
  const { getData, loading, response } = useFetch(URL);

  useEffect(() => {
    getData();
  }, []);

  const filterTechs = response.filter(tech => {
    return (
      tech.tech.toLowerCase().includes(searchTech.toLowerCase()) ||
      tech.type.toLowerCase().includes(searchTech.toLowerCase())
    );
  });

  const techs = null || [...filterTechs].sort((a, b) => {
    return (
      (sortTech === "ASC" && a.tech.localeCompare(b.tech)) ||
      (sortTech === "DESC" && b.tech.localeCompare(a.tech))
    );
  });

  return (
    <TechsContext.Provider value={{ techs, loading, setSearchTech, setSortTech }}>
      {children}
    </TechsContext.Provider>
  );
};

export function useTechsContext() {
  const context = useContext(TechsContext);

  if (!context) {
    console.log("Something's wrong with the data...");
  };

  return context;
}

export default useTechsContext;
