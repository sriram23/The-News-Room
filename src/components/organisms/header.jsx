import React from "react";
const Header = ({ country, onCountryChange }) => {
  const COUNTRIES = [
    { text: "United Arab Emirates", value: "ae" },
    { text: "Argentina", value: "ar" },
    { text: "Austria", value: "at" },
    { text: "Australia", value: "au" },
    { text: "Belgium", value: "be" },
    { text: "Bulgaria", value: "bg" },
    { text: "Brazil", value: "br" },
    { text: "Canada", value: "ca" },
    { text: "Switzerland", value: "ch" },
    { text: "China", value: "cn" },
    { text: "Colombia", value: "co" },
    { text: "Cuba", value: "cu" },
    { text: "Czech Republic", value: "cz" },
    { text: "Germany", value: "de" },
    { text: "Egypt", value: "eg" },
    { text: "France", value: "fr" },
    { text: "United Kingdom", value: "gb" },
    { text: "Greece", value: "gr" },
    { text: "Hong Kong", value: "hk" },
    { text: "Hungary", value: "hu" },
    { text: "Indonesia", value: "id" },
    { text: "Ireland", value: "ie" },
    { text: "Israel", value: "il" },
    { text: "India", value: "in" },
    { text: "Italy", value: "it" },
    { text: "Japan", value: "jp" },
    { text: "South Korea", value: "kr" },
    { text: "Lithuania", value: "lt" },
    { text: "Latvia", value: "lv" },
    { text: "Morocco", value: "ma" },
    { text: "Mexico", value: "mx" },
    { text: "Malaysia", value: "my" },
    { text: "Nigeria", value: "ng" },
    { text: "Netherlands", value: "nl" },
    { text: "Norway", value: "no" },
    { text: "New Zealand", value: "nz" },
    { text: "Philippines", value: "ph" },
    { text: "Poland", value: "pl" },
    { text: "Portugal", value: "pt" },
    { text: "Romania", value: "ro" },
    { text: "Serbia", value: "rs" },
    { text: "Russia", value: "ru" },
    { text: "Saudi Arabia", value: "sa" },
    { text: "Sweden", value: "se" },
    { text: "Singapore", value: "sg" },
    { text: "Slovenia", value: "si" },
    { text: "Slovakia", value: "sk" },
    { text: "Thailand", value: "th" },
    { text: "Turkey", value: "tr" },
    { text: "Taiwan", value: "tw" },
    { text: "Ukraine", value: "ua" },
    { text: "United States", value: "us" },
    { text: "Venezuela", value: "ve" },
    { text: "South Africa", value: "za" },
  ];

  return (
    <nav className="bg-blue-500 flex items-center justify-center flex-wrap md:justify-between sm:justify-center sm:flex-wrap p-4">
      <h1 className="text-white xl:text-3xl md:text-2xl sm:text-xl font-bold whitespace-nowrap text-center m-2 md:text-left  p-2 rounded-lg">The News Room</h1>
      <input
        type="search"
        placeholder="Search for any news"
        className="xl:text-3xl md:text-2xl sm:text-xl font-bold p-2 rounded-lg flex-1"
      />
      <div className="flex">
        <img
          className="m-2"
          src={`https://flagsapi.com/${country.toUpperCase()}/flat/64.png`}
          alt="country flag"
        />
        <select
          className="xl:text-3xl md:text-2xl sm:text-l text-l font-bold p-2 rounded-lg flex-1 m-2 lg:h-auto sm:h-12"
          defaultValue={country}
          onChange={onCountryChange}
        >
          {COUNTRIES.map((country) => (
            <option
              key={country.value}
              className="flex items-center"
              value={country.value}
            >
              {country.text}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Header;
