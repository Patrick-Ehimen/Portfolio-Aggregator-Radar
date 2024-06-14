"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
    headers: {
        "X-CMC_PRO_API_KEY": "73f65405-6db8-4a76-8017-74530cc5656a",
    },
};
axios
    .request(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
})
    .catch(function (error) {
    console.log(error);
});
