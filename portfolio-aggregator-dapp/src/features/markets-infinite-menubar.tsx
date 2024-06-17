// import Link from "next/link";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { title } from "process";

// type Metrics = {
//   active_cryptocurrencies: string;
// };

// export default async function GlobalMarketsMetricsMenubar() {
//   const res = await fetch(
//     "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",
//     {
//       method: "GET",
//       headers: {
//         "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY || "",
//       },
//       next: { revalidate: 86400 }, // Cache revalidation period
//     }
//   );

//   // Parse the response JSON
//   const globalMetrics = await res.json();
//   console.log("globalMetrics", globalMetrics);
//   console.log("----------------------------");
//   const globalMarketQuote = globalMetrics.data;
//   console.log("globalMetricsQuote", globalMarketQuote);

//   // MArket-Cap Stats
//   const total_market_cap = globalMetrics.data.quote.USD.total_market_cap;

//   // Divide by 1 trillion to get a smaller number
//   const scaled_down_market_cap = total_market_cap / 1e12;

//   // Format the result to show only one decimal place
//   const formatted_market_cap = scaled_down_market_cap.toLocaleString("en-US", {
//     minimumFractionDigits: 1,
//     maximumFractionDigits: 2,
//   });

//   // Market-Volume Stats
//   const total_market_volume = globalMetrics.data.quote.USD.total_volume_24h;
//   // Divide by 1 brillion to get a smaller number
//   const scaled_down_market_volume = total_market_volume / 1e9;
//   // Format the result to show only one decimal place
//   const formatted_market_volume = scaled_down_market_volume.toLocaleString(
//     "en-US",
//     {
//       minimumFractionDigits: 1,
//       maximumFractionDigits: 2,
//     }
//   );

//   // BTC Dominance
//   const btc_dominance = globalMetrics.data.btc_dominance;
//   // Format the btc_dominance to show only two decimal places
//   const formatted_btc_dominance = btc_dominance.toFixed(2);

//   // ETH Dominance
//   const eth_dominance = globalMetrics.data.eth_dominance;
//   // Format the eth_dominance to show only two decimal places
//   const formatted_eth_dominance = eth_dominance.toFixed(2);

//   // Altcoin Market Cap
//   const altcoin_market_cap = globalMetrics.data.quote.USD.altcoin_market_cap;
//   // Scale down the altcoin_market_cap by dividing by 1 trillion
//   const scaled_down_altcoin_market_cap = altcoin_market_cap / 1e12;
//   // Format the scaled_down_altcoin_market_cap to show only two decimal place
//   const formatted_altcoin_market_cap =
//     scaled_down_altcoin_market_cap.toLocaleString("en-US", {
//       minimumFractionDigits: 1,
//       maximumFractionDigits: 2,
//     });

//   // Stablecoin Market Cap
//   const stablecoin_market_cap =
//     globalMetrics.data.quote.USD.stablecoin_market_cap;
//   // Scale down the stablecoin_market_cap by dividing by 1 brillion
//   const scaled_down_stablecoin_market_cap = stablecoin_market_cap / 1e9;
//   // Format the scaled_down_altcoin_market_cap to show only one decimal place
//   const formatted_stablecoin_market_cap =
//     scaled_down_stablecoin_market_cap.toLocaleString("en-US", {
//       minimumFractionDigits: 1,
//       maximumFractionDigits: 1,
//     });

//   let cap = formatted_market_cap;
//   let vol = formatted_market_volume;
//   let btc_dom = formatted_btc_dominance;
//   let eth_dom = formatted_eth_dominance;
//   let alt_cap = formatted_altcoin_market_cap;
//   let stable_cap = formatted_stablecoin_market_cap;

//   const stats = [
//     {
//       quote: "Market Cap",
//       name: `$${cap} T`,
//     },
//     {
//       quote: "24h Market Volume",
//       name: `$${vol} B`,
//     },
//     {
//       quote: "BTC Dominance",
//       name: `${btc_dom}%`,
//     },
//     {
//       quote: "ETH Dominance",
//       name: `${eth_dom}%`,
//     },
//     {
//       quote: "Altcoin Market Cap",
//       name: `$${alt_cap} T`,
//     },
//     {
//       quote: "Stablecoin Market Cap",
//       name: `${stable_cap} B`,
//     },
//   ];

//   return (
//     <div className="h-[10rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <Link href="/markets/overview">
//         <InfiniteMovingCards items={stats} direction="right" speed="normal" />
//       </Link>
//     </div>
//   );
// }
import React from "react";

export default function GlobalMarketsMetricsMenubar() {
  return <div>markets-infinite-menubar</div>;
}
