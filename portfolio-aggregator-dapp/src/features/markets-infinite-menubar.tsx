"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { title } from "process";

export function MarketsMenubar() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={stats} direction="right" speed="normal" />
    </div>
  );
}

let cap = 2.44;

const stats = [
  {
    quote: "Market Cap",
    name: `${cap} T`,
    title: `7.82%`,
  },
  {
    quote: "Market Volume",
    name: `${cap} T`,
    title: `7.82%`,
  },
  {
    quote: "BTC Dominance",
    name: `${cap} T`,
    title: `7.82%`,
  },
  {
    quote: "ETH Dominance",
    name: `${cap} T`,
    title: `7.82%`,
  },
  {
    quote: "Market Cap",
    name: `${cap} T`,
    title: `7.82%`,
  },
];
