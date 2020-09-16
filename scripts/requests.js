const getPuzzle = async (wordcount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordcount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

// const getCurrentCountry = async () => {
//   const location = await getLocation();
//   const country = await getCountry(location.country);
//   return country;
// };

// const getCountry = async (countryCode) => {
//   const response = await fetch("//restcountries.eu/rest/v2/all");
//   if (response.status === 200) {
//     const data = await response.json();
//     return data.find((country) => country.alpha2Code === countryCode);
//   } else {
//     throw new Error("Unable to fetch the country");
//   }
// };

// const getLocation = async () => {
//   const response = await fetch("//ipinfo.io/json?token=ae632e78a80f8c");
//   if (response.status === 200) {
//     return response.json();
//   } else {
//     throw new Error("Unable to fetch location");
//   }
// };
