import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import CryptoPriceTable from "@/features/table/crypto-price-table";
import GlobalMarketsMetricsMenubar from "@/features/markets-infinite-menubar";
// import { getGlobalMetrics } from "@/app/api/get-global-metrics";

export default async function CoinsContent() {
  // const data = await getGlobalMetrics();

  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <GlobalMarketsMetricsMenubar />
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          {/* <div className="flex mt-5 flex- relative">
            <Image
              src={Oxose}
              alt="Placeholder Image"
              width={500}
              height={500}
              priority
            />
          </div> */}
          <CryptoPriceTable />
        </div>
      </CardContent>
    </Card>
  );
}
