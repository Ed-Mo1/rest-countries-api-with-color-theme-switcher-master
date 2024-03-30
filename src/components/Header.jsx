import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white shadow-lg dark:bg-dark-blue transition-colors duration-500">
      <div className="container flex items-center justify-between py-4">
        <h2 className="text-2xl font-[700] dark:text-white">
          Where in the world?
        </h2>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex items-center gap-2 text-lg dark:text-white"
        >
          <IoMoonOutline className="dark:hidden" />
          <IoMoonSharp className="hidden dark:block" />
          Dark Mood
        </button>
      </div>
    </div>
  );
};

export default Header;
