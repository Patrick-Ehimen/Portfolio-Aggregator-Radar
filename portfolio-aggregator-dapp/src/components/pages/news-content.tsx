import { Card, CardContent } from "@/components/ui/card";
import { NewsGridLayout } from "@/features/news-grid-layout";

export default async function NewsContent() {
  return (
    <Card className="rounded-lg border-none mt-6">
      <CardContent className="p-6">
        <div className="flex flex-row justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
          <NewsGridLayout />
        </div>
      </CardContent>
    </Card>
  );
}
