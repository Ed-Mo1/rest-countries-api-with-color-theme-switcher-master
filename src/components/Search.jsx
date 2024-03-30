import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { CountriesDataContext } from "../context/CountriesData";
const Search = () => {
  const { setSearchValue, searchValue } = useContext(CountriesDataContext);
  return (
    <div className="flex gap-1 shadow-lg dark:bg-dark-blue rounded-lg transition-colors duration-500 dark:text-white ps-5 items-center w-full max-w-[500px]">
      <GoSearch className="text-2xl" />
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a country..."
        className="focus:outline-none p-4 bg-transparent border-inherit dark:text-white flex-grow-[1]"
      />
    </div>
  );
};

export default Search;
