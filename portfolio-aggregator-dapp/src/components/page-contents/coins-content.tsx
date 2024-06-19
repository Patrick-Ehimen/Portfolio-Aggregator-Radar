import { Card, CardContent } from "@/components/ui/card";
import CryptoPriceTable from "@/features/table/crypto-price-table";
import GlobalMarketsMetricsMenubar from "@/features/markets-infinite-menubar";

export default function CoinsContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <GlobalMarketsMetricsMenubar />
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <CryptoPriceTable />
        </div>
      </CardContent>
    </Card>
  );
}
