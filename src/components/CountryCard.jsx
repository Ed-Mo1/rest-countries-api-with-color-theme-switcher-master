import { useNavigate } from "react-router-dom";
const CountryCard = ({
  flags: { svg, alt },
  region,
  population,
  capital,
  ccn3,
  name: { common },
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(
          `/rest-countries-api-with-color-theme-switcher-master/country/${ccn3}`
        )
      }
      className="h-full dark:bg-dark-blue dark:hover:bg-very-dark-blue-background cursor-pointer transition-colors duration-500 shadow-lg rounded-lg"
    >
      <img src={svg} alt={alt} className="w-full aspect-[16/9] object-cover" />
      <div className="text-white p-5">
        <h3 className="country-name py-3 ">{common}</h3>
        <h4 className="info-title">
          region: <span className="info-value">{region}</span>
        </h4>
        <h4 className="info-title">
          population: <span className="info-value"> {population}</span>
        </h4>
        <h4 className="info-title">
          capital: <span className="info-value">{capital}</span>
        </h4>
      </div>
    </div>
  );
};

export default CountryCard;
