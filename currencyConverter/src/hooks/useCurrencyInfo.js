import { useEffect, useState } from "react";

// Custom hook to fetch currency information
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch currency data from API
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);

  return data; // Return the currency data
}
//In this case, the useCurrencyInfo function is being exported as the default export from the useCurrencyInfo.js file. Other modules can then import this function using the import statement.
export default useCurrencyInfo;
