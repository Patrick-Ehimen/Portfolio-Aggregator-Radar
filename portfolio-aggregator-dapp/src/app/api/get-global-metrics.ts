import React from "react";

export async function getGlobalMetrics() {
  // Perform a GET request to the CoinMarketCap API for global metrics
  const res = await fetch(
    "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
      },
      next: { revalidate: 86400 }, // Cache revalidation period
    }
  );

  // Parse the response JSON
  const globalMetrics = await res.json();
  const active_cryptocurrencies = globalMetrics.data.active_cryptocurrencies;

  // Log the data obtained from the API to the console
  console.log("global metrics", globalMetrics.data);
  console.log("----------------------------------");
  console.log("active_cryptocurrencies ==", active_cryptocurrencies);

  return {
    props: {
      data: globalMetrics, // Return the API data as props
    },
  };
}
