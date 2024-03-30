import { CountriesDataContext } from "../context/CountriesData";
import { useContext } from "react";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import DropDown from "../components/DropDown";
const CountryList = () => {
  const { countries } = useContext(CountriesDataContext);
  return (
    <div className="dark:bg-very-dark-blue-background pt-20 pb-10 transition-colors duration-500 min-h-screen">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-10 ">
          <Search />
          <DropDown />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-16">
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
