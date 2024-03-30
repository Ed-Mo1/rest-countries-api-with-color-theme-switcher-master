import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { CountriesDataContext } from "../context/CountriesData";
const CountryInfo = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(CountriesDataContext);
  const country = data.find((country) => country.name === name);
  return (
    <div className="dark:bg-very-dark-blue-background min-h-screen">
      <div className="container h-full">
        <div className="pt-20">
          <button
            onClick={() => {
              navigate("/rest-countries-api-with-color-theme-switcher-master/");
            }}
            className="back-btn"
          >
            <IoMdArrowBack className="text-lg" />
            Back
          </button>
        </div>
        <div className="flex gap-24 mt-14 pb-5 max-lg:flex-col">
          <div className="flex-1">
            <img
              src={country.flags.svg}
              alt="img"
              className="w-full aspect-[16/9]"
            />
          </div>
          <div className="flex-1">
            <h2 className="country-name">{country.name}</h2>
            <div className="flex flex-wrap gap-y-3 gap-x-20 pt-5">
              <div className="flex flex-col gap-3">
                <h4 className="info-title">
                  native Name:{" "}
                  <span className="info-value"> {country.nativeName}</span>
                </h4>
                <h4 className="info-title">
                  population:{" "}
                  <span className="info-value">{country.population}</span>
                </h4>
                <h4 className="info-title">
                  region: <span className="info-value">{country.region}</span>
                </h4>
                <h4 className="info-title">
                  subregion:{" "}
                  <span className="info-value">{country.subregion}</span>
                </h4>
                <h4 className="info-title">
                  capital: <span className="info-value">{country.capital}</span>
                </h4>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="info-title">
                  top Level Domain:{" "}
                  <span className="info-value">{country.topLevelDomain}</span>
                </h4>
                <h4 className="info-title space-y-3 space-x-3">
                  <span>currencies:</span>
                  {country.currencies.map(({ code, name }) => (
                    <span key={code} className="info-value">
                      {name}
                    </span>
                  ))}
                </h4>
                <h4 className="info-title space-y-3 space-x-3">
                  <span>languages:</span>
                  {country.languages.map(({ iso639_1, name }) => (
                    <span key={iso639_1} className="info-value">
                      {name}
                    </span>
                  ))}
                </h4>
              </div>
            </div>

            <div className="pt-10">
              <h4 className="info-title space-y-3 space-x-3">
                <span>border countries:</span>
                {data.map(
                  ({ alpha3Code, alpha2Code, name }) =>
                    (country.borders?.includes(alpha3Code) ||
                      country.borders?.includes(alpha2Code)) && (
                      <span
                        onClick={() =>
                          navigate(
                            `/rest-countries-api-with-color-theme-switcher-master/country/${name}`
                          )
                        }
                        key={name}
                        className="border-country"
                      >
                        {name}
                      </span>
                    )
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
