import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { substanceEffect, effectProfit } from "@/lib/tables";

export function SubstanceInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Substance Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-medium">
              Substances & Their Effects
            </h3>
            <div className="bg-card border-border max-h-96 overflow-auto rounded-md border p-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-muted-foreground py-2 text-left font-medium">
                      Substance
                    </th>
                    <th className="text-muted-foreground py-2 text-left font-medium">
                      Inherent Effect
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(substanceEffect).map(
                    ([substance, effect]) => (
                      <tr key={substance} className="border-border border-t">
                        <td className="text-foreground py-2">{substance}</td>
                        <td className="text-foreground py-2">{effect}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Effect Profit Values</h3>
            <div className="bg-card border-border max-h-96 overflow-auto rounded-md border p-4">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-muted-foreground py-2 text-left font-medium">
                      Effect
                    </th>
                    <th className="text-muted-foreground py-2 text-left font-medium">
                      Profit Multiplier
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(effectProfit)
                    .sort((a, b) => b[1] - a[1]) // Sort by profit value (highest first)
                    .map(([effect, profit]) => (
                      <tr key={effect} className="border-border border-t">
                        <td className="text-foreground py-2">{effect}</td>
                        <td className="text-foreground py-2">
                          {profit.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
