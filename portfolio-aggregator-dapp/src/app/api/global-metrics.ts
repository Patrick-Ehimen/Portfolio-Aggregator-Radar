import React from "react";
import axios from "axios";
import { url } from "inspector";
import { headers } from "next/headers";

const apiKey = process.env.COINMARKETCAP_API_KEY;

export const getStaticProps = async () => {
  const config = {
    url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    headers: {
      "X-CMC_PRO_API_KEY": apiKey,
    },
  };

  try {
    const response = await axios.request(config);
    const data = response.data;

    const {
      data: {
        active_cryptocurrencies,
        btc_dominance,
        eth_dominance,
        quote: {
          USD: { total_market_cap, total_volume_24h },
        },
      },
    } = data;

    console.log(data);

    return {
      props: {
        totalCryptocurrencies: active_cryptocurrencies,
        btcdominance: btc_dominance,
        ethdominance: eth_dominance,
        totalMarketCap: total_market_cap,
        totalVolume24h: total_volume_24h,
      },
    };
  } catch (error) {
    console.log("error fetching data", error);
    return {
      props: {},
    };
  }
};
