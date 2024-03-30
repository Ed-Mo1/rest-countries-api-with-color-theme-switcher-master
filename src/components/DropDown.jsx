import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CountriesDataContext } from "../context/CountriesData";

const DropDown = () => {
  const { setFilter, regions } = useContext(CountriesDataContext);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="relative">
      <button
        className="text-lg cursor-pointer flex gap-5 dark:bg-dark-blue shadow-lg transition-colors duration-500 dark:text-white py-4 px-6 rounded-lg items-center"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Filter by Region
        <FaAngleDown className="text-lg" />
      </button>
      {showDropdown && (
        <div className="absolute z-40 right-0 top-[120%] w-full rounded-lg flex flex-col  ga-5 shadow-lg">
          {regions.map((region, i) => (
            <button
              onClick={() => {
                setFilter(region);
                setShowDropdown(false);
              }}
              key={i}
              className={`bg-white ${i === 0 && "rounded-t-lg"} ${
                i === regions.length - 1 && "rounded-b-lg"
              } transition-colors duration-500 text-left dark:bg-dark-blue dark:text-white p-5 cursor-pointer dark:hover:bg-very-dark-blue-background`}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
