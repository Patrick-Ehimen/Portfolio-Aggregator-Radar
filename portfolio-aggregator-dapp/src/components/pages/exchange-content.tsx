import Link from "next/link";
import Image from "next/image";
import { Oxose } from "../../../public/assets";

import { Card, CardContent } from "@/components/ui/card";

export default function ExchangeContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex mt-5 flex- relative">
            <Image
              src={Oxose}
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </CardContent>
      <CardContent className="p-6">
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex flex- relative">
            <Image
              src="/placeholder.png"
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </CardContent>
      <CardContent className="p-6">
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <div className="flex mt-5 flex- relative">
            <Image
              src={Oxose}
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
