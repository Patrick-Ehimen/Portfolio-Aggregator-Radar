// export async function fetchGlobalMetrics() {
//   const apiKey = process.env.COINMARKETCAP_API_KEY;
//   const response = await fetch(
//     "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
//     {
//       headers: {
//         "X-CMC_PRO_API_KEY": apiKey || "",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch global metrics");
//   }

//   const data = await response.json();
//   console.log(data);
//   return data.data;
// }
// import { AxiosResponse } from "axios";

// const axios = require("axios");

// let config = {
//   method: "get",
//   maxBodyLength: Infinity,
//   url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
//   headers: {
//     "X-CMC_PRO_API_KEY": "73f65405-6db8-4a76-8017-74530cc5656a",
//   },
// };

// axios
//   .request(config)
//   .then((response: AxiosResponse) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error: any) => {
//     console.log(error);
//   });
