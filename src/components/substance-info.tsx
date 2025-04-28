import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { substanceEffect, effectProfit } from "@/lib/tables"

export function SubstanceInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Substance Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Substances & Their Effects</h3>
                        <div className="bg-card p-4 rounded-md overflow-auto max-h-96 border border-border">
                            <table className="min-w-full">
                                <thead>
                                <tr>
                                    <th className="text-left font-medium text-muted-foreground py-2">Substance</th>
                                    <th className="text-left font-medium text-muted-foreground py-2">Inherent Effect</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(substanceEffect).map(([substance, effect]) => (
                                    <tr key={substance} className="border-t border-border">
                                        <td className="py-2 text-foreground">{substance}</td>
                                        <td className="py-2 text-foreground">{effect}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">Effect Profit Values</h3>
                        <div className="bg-card p-4 rounded-md overflow-auto max-h-96 border border-border">
                            <table className="min-w-full">
                                <thead>
                                <tr>
                                    <th className="text-left font-medium text-muted-foreground py-2">Effect</th>
                                    <th className="text-left font-medium text-muted-foreground py-2">Profit Multiplier</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(effectProfit)
                                    .sort((a, b) => b[1] - a[1]) // Sort by profit value (highest first)
                                    .map(([effect, profit]) => (
                                        <tr key={effect} className="border-t border-border">
                                            <td className="py-2 text-foreground">{effect}</td>
                                            <td className="py-2 text-foreground">{profit.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
