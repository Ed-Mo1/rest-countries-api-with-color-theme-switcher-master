import { useParams, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useGetCountryByAlphaCodeQuery } from "../app/services/countriesApiSlice";
import { useEffect, useState } from "react";
const CountryInfo = () => {
  const { code } = useParams();
  const { data, isLoading } = useGetCountryByAlphaCodeQuery(code);
  const navigate = useNavigate();
  const country = data && data[0];
  const [borderCountries, setBorderCountries] = useState([]);
  useEffect(() => {
    const fetchBorderCountries = async () => {
      if (country && country.borders) {
        const borderCodes = country.borders;
        const borderCountriesData = await Promise.all(
          borderCodes.map(async (borderCode) => {
            const response = await fetch(
              `https://restcountries.com/v3.1/alpha/${borderCode}`
            );

            const borderCountryData = await response.json();
            return {
              name: borderCountryData[0].name.common,
              code: borderCountryData[0].cca3,
            };
          })
        );
        setBorderCountries(borderCountriesData);
      }
    };

    fetchBorderCountries();
  }, [country]);

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

        {isLoading ? (
          <div className="text-center text-3xl text-white pt-20">
            Loading...
          </div>
        ) : (
          <div className="flex gap-24 mt-14 pb-5 max-lg:flex-col">
            <div className="flex-1">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full aspect-[16/9]"
              />
            </div>
            <div className="flex-1">
              <h2 className="country-name">{country.name.common}</h2>
              <div className="flex flex-wrap gap-y-3 gap-x-20 pt-5">
                <div className="flex flex-col gap-3">
                  <h4 className="info-title">
                    native Name:{" "}
                    <span className="info-value">
                      {" "}
                      {Object.values(country.name.nativeName)[0].common}
                    </span>
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
                    capital:{" "}
                    <span className="info-value">{country.capital[0]}</span>
                  </h4>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="info-title">
                    top Level Domain:{" "}
                    <span className="info-value">{country.tld[0]}</span>
                  </h4>
                  <h4 className="info-title space-y-3 space-x-3">
                    <span>currencies:</span>
                    {Object.values(country.currencies).map(
                      ({ name, symbol }) => (
                        <span key={symbol} className="info-value">
                          {name}
                        </span>
                      )
                    )}
                  </h4>
                  <h4 className="info-title space-y-3 space-x-3">
                    <span>languages:</span>
                    {Object.values(country.languages).map((lang, i) => (
                      <span key={i} className="info-value">
                        {lang}
                      </span>
                    ))}
                  </h4>
                </div>
              </div>

              <div className="pt-10">
                <h4 className="info-title space-y-3 space-x-3">
                  <span>border countries:</span>
                  {borderCountries
                    ? borderCountries.map(({ name, code }) => (
                        <span
                          onClick={() =>
                            navigate(
                              `/rest-countries-api-with-color-theme-switcher-master/country/${code}`
                            )
                          }
                          key={code}
                          className="border-country"
                        >
                          {name}
                        </span>
                      ))
                    : "No border countries"}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
