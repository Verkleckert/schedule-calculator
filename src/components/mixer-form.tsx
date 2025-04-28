"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { effectsList, presets } from "@/lib/tables"
import { showToast } from "@/lib/toast"
import type { OptimizationResult } from "@/lib/types"
import { InfoIcon } from "lucide-react"

export function MixerForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPreset, setSelectedPreset] = useState("")
    const [initialEffect, setInitialEffect] = useState<string | null>(null)
    const [basePrice, setBasePrice] = useState("")
    const [maxSteps, setMaxSteps] = useState("5")
    const [showPresetsInfo, setShowPresetsInfo] = useState(false)

    // Update effect and price when preset changes
    useEffect(() => {
        if (selectedPreset) {
            const preset = presets.find((p) => p.name === selectedPreset)
            if (preset) {
                setInitialEffect(preset.initialEffect)
                setBasePrice(preset.basePrice.toString())
            }
        }
    }, [selectedPreset])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        try {
            if (!selectedPreset) {
                throw new Error("Please select a starting substance")
            }

            if (!basePrice || !maxSteps) {
                throw new Error("Please fill all required fields")
            }

            const basePriceNum = Number.parseFloat(basePrice)
            const maxStepsNum = Number.parseInt(maxSteps)

            if (isNaN(basePriceNum) || isNaN(maxStepsNum)) {
                throw new Error("Please enter valid numbers for base price and steps")
            }

            if (initialEffect && !effectsList.includes(initialEffect)) {
                throw new Error(`Invalid effect: ${initialEffect}`)
            }

            const response = await fetch("/api/optimize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    initialEffect: initialEffect || "",
                    basePrice: basePriceNum,
                    maxSteps: maxStepsNum,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to calculate optimal mix")
            }

            const result: OptimizationResult = await response.json()

            // Store the result in localStorage
            localStorage.setItem("mixerResult", JSON.stringify(result))

            // Dispatch a custom event to notify that calculation is complete
            window.dispatchEvent(new Event("calculationComplete"))

            showToast({
                title: "Calculation Complete",
                description: "The optimal mixing sequence has been calculated successfully!",
                type: "success",
            })

            // No need to refresh the page anymore
            // router.refresh()
        } catch (error) {
            showToast({
                title: "Error",
                description: error instanceof Error ? error.message : "An error occurred",
                type: "error",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="preset">Starting Substance</Label>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => setShowPresetsInfo(!showPresetsInfo)}
                            >
                                <InfoIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle presets info</span>
                            </Button>
                        </div>
                        <select
                            id="preset"
                            className="w-full p-2 border rounded-md"
                            value={selectedPreset}
                            onChange={(e) => setSelectedPreset(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select a starting substance
                            </option>
                            {presets.map((preset) => (
                                <option key={preset.name} value={preset.name}>
                                    {preset.name} - ${preset.basePrice} ({preset.initialEffect || "none"})
                                </option>
                            ))}
                        </select>
                        {selectedPreset && (
                            <div className="mt-2 p-3 bg-gray-50 rounded-md">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">Initial Effect:</span>
                                        <div className="font-medium">{initialEffect || "None"}</div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500">Base Price:</span>
                                        <div className="font-medium">${basePrice}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {showPresetsInfo && (
                        <div className="bg-gray-50 p-4 rounded-md text-sm">
                            <h3 className="font-medium mb-2">Available Substances</h3>
                            <div className="space-y-2">
                                {presets.map((preset) => (
                                    <div key={preset.name} className="pb-2 border-b border-gray-200 last:border-0">
                                        <div className="font-medium">{preset.name}</div>
                                        <div>Initial Effect: {preset.initialEffect || "None"}</div>
                                        <div>Base Price: ${preset.basePrice}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-3 text-gray-600">
                                To modify substances, edit the <code>presets</code> array in <code>lib/tables.ts</code>
                            </p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="maxSteps">Maximum Steps</Label>
                        <Input
                            id="maxSteps"
                            type="number"
                            placeholder="5"
                            min="1"
                            max="8"
                            value={maxSteps}
                            onChange={(e) => setMaxSteps(e.target.value)}
                            required
                        />
                        <p className="text-sm text-gray-500">The maximum number of substances to add to the mix</p>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Calculating..." : "Calculate Optimal Mix"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
