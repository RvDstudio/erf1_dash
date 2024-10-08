import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import ZuivelProducts from "@/src/components/ZuivelProducts";
import CombinedTotalPrice from "@/src/components/CombinedTotalPrice";
import KaasProducts from "@/src/components/KaasProducts";
import VleesProducts from "@/src/components/VleesProducts";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 pt-6">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="zuivel">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="zuivel">Zuivel</TabsTrigger>
                <TabsTrigger value="kaas">Kaas</TabsTrigger>
                <TabsTrigger value="vlees">Vlees</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="zuivel">
              <div className="p-0 md:p-4 md:pt-0">
                <div className="p-4 flex items-center justify-between">
                  <div className="text-[#374c69] text-md font-medium">
                    Onze Zuivel
                  </div>
                  <CombinedTotalPrice />
                </div>
                <div>
                  <ZuivelProducts {...{ onPriceChange: () => {} }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="kaas">
              <div className="p-0 md:p-4">
                <div className="p-4 flex items-center justify-between">
                  <div className="text-[#374c69] text-md font-medium">
                    Onze Zuivel
                  </div>
                  <CombinedTotalPrice />
                </div>
                <div>
                  <KaasProducts {...{ onPriceChange: () => {} }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vlees">
              <div className="p-0 md:p-4">
                <div className="p-4 flex items-center justify-between">
                  <div className="text-[#374c69] text-md font-medium">
                    Onze Zuivel
                  </div>
                  <CombinedTotalPrice />
                </div>
                <div>
                  <VleesProducts {...{ onPriceChange: () => {} }} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
