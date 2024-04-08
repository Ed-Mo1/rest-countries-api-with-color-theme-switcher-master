import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useGetCountriesByNameMutation } from "../app/services/countriesApiSlice";

const Search = () => {
  const [getCountriesByName] = useGetCountriesByNameMutation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("searchValue");
    if (storedValue) {
      setSearchValue(storedValue);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const value = searchValue.trim().toLowerCase();
      if (value.length > 0) {
        getCountriesByName(value);
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [searchValue, getCountriesByName]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    localStorage.setItem("searchValue", value);
  };

  return (
    <div className="flex gap-1 ps-4 shadow-lg dark:bg-dark-blue rounded-lg transition-colors duration-500 dark:text-white items-center w-full max-w-[500px]">
      <GoSearch className="text-2xl" />
      <input
        type="search"
        placeholder="Search for a country..."
        className="focus:outline-none p-4 bg-transparent border-inherit dark:text-white flex-grow-[1]"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
