import { createContext, useEffect, useState } from "react";
export const CountriesDataContext = createContext();
import data from "../data.json";
const CountriesData = ({ children }) => {
  const [countries, setCountries] = useState(data);
  const [filter, setFilter] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    const filteredData = data.filter((country) =>
      filter === "All"
        ? true
        : country.region.toLowerCase() === filter.toLowerCase()
    );
    searchValue.length > 0
      ? setCountries(
          filteredData.filter((country) =>
            country.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      : setCountries(filteredData);
  }, [filter, searchValue]);
  return (
    <CountriesDataContext.Provider
      value={{ countries, setFilter, setSearchValue, regions, searchValue,data }}
    >
      {children}
    </CountriesDataContext.Provider>
  );
};

export default CountriesData;
