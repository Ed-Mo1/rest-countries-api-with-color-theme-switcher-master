import { useGetAllCountriesQuery } from "../app/services/countriesApiSlice";
import CountryCard from "../components/CountryCard";
import Search from "../components/Search";
import DropDown from "../components/DropDown";
import { useSelector } from "react-redux";

const CountryList = () => {
  useGetAllCountriesQuery();
  const { countries, loading, error } = useSelector(
    ({ countries }) => countries
  );
  return (
    <div className="dark:bg-very-dark-blue-background pt-20 pb-10 transition-colors duration-500 min-h-screen">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-10 ">
          <Search />
          <DropDown />
        </div>
        {error && (
          <div className="text-center text-3xl text-white pt-20">
            No countries found
          </div>
        )}
        {loading && (
          <div className="text-center text-3xl text-white pt-20">
            Loading...
          </div>
        )}
        {countries && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-16">
            {countries.map((country) => (
              <CountryCard key={country["flag"]} {...country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryList;
