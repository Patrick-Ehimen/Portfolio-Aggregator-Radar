import { Grip } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { hoverMenuItems } from "../../../constants";

import React from "react";

export default function MenuToolkit() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Grip className="cursor-pointer" />
      </HoverCardTrigger>

      <HoverCardContent className="ml-24 w-[600px]">
        <div className="py-1 grid grid-cols-2 gap-4">
          {hoverMenuItems.map((item, index) => (
            <div key={index} className="cursor-pointer">
              <div className="flex">
                <Image
                  src={item.img}
                  alt="img"
                  className={`${
                    index === 0 ? "bg-[#674AFF] p-[5px] rounded-lg" : ""
                  } w-6 h-6} ${
                    index === 1 ? "bg-[#FB774A] p-[5px] rounded-lg" : ""
                  }`}
                />
                <h3 className="mx-3 text-sm font-medium">{item.title}</h3>
              </div>
              <p className="text-sm text-[#A4A8AB] mx-6 my-2">{item.para}</p>
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
