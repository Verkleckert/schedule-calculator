"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { OptimizationResult } from "@/lib/types";

export function MixerResults() {
  const [result, setResult] = useState<OptimizationResult | null>(null);
  const [loading] = useState(false);

  // Function to load results from localStorage
  const loadResults = () => {
    const storedResult = localStorage.getItem("mixerResult");
    if (storedResult) {
      try {
        setResult(JSON.parse(storedResult));
      } catch (e) {
        console.error("Failed to parse stored result", e);
      }
    }
  };

  // Load results on initial render
  useEffect(() => {
    loadResults();

    // Listen for the custom event that signals calculation completion
    const handleCalculationComplete = () => {
      console.log("Calculation complete event received");
      loadResults();
    };

    // Add event listener
    window.addEventListener("calculationComplete", handleCalculationComplete);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener(
        "calculationComplete",
        handleCalculationComplete,
      );
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-8">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900"></div>
              <p>Loading results...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Optimization Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="bg-card border-border rounded-md border p-4">
              <div className="text-muted-foreground text-sm">
                Initial Effect
              </div>
              <div className="font-medium">
                {result.initialEffect || "None"}
              </div>
            </div>
            <div className="bg-card border-border rounded-md border p-4">
              <div className="text-muted-foreground text-sm">Base Price</div>
              <div className="font-medium">${result.basePrice.toFixed(2)}</div>
            </div>
            <div className="bg-card border-border rounded-md border p-4">
              <div className="text-muted-foreground text-sm">
                Final Sell Price
              </div>
              <div className="font-medium text-green-600">
                ${result.finalSellPrice.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-lg font-medium">Best Sequence</h3>
            <div className="flex flex-wrap gap-2">
              {result.bestSequence.map((substance, index) => (
                <Badge key={index} variant="outline">
                  {substance}
                </Badge>
              ))}
            </div>
          </div>

          <h3 className="mb-2 text-lg font-medium">Step-by-Step Results</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Step</TableHead>
                <TableHead>Substance</TableHead>
                <TableHead>Effects</TableHead>
                <TableHead>Multiplier</TableHead>
                <TableHead>Sell Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result.steps.map((step, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{step.step}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {step.effects.map((effect) => (
                        <Badge
                          key={effect}
                          variant="secondary"
                          className="text-xs"
                        >
                          {effect}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{step.multiplier.toFixed(2)}</TableCell>
                  <TableCell>${step.sellPrice.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
