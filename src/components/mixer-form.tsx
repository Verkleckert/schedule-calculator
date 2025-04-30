"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
                        </div>
                        <Select
                            value={selectedPreset}
                            onValueChange={setSelectedPreset}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a starting substance" />
                            </SelectTrigger>
                            <SelectContent>
                                {presets.map((preset) => (
                                    <SelectItem key={preset.name} value={preset.name}>
                                        {preset.name} - ${preset.basePrice} ({preset.initialEffect || "none"})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {selectedPreset && (
                            <div className="mt-2 p-3 bg-muted/50 rounded-md">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span className="text-sm font-medium text-muted-foreground">Initial Effect:</span>
                                        <div className="font-medium text-foreground">{initialEffect || "None"}</div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-muted-foreground">Base Price:</span>
                                        <div className="font-medium text-foreground">${basePrice}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

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
