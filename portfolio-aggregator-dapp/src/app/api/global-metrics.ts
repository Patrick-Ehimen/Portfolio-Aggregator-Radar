import type { NextApiRequest, NextApiResponse } from "next";
import { fetchGlobalMetrics } from "@/lib/coin-market-cap-api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const globalMetrics = await fetchGlobalMetrics();
    res.status(200).json(globalMetrics);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch global metrics" });
  }
}
