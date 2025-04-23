"use server"
import { searchOptimal, applySubstance, stateProfit } from "@/lib/logic"
import type { MixRequest, OptimizationResult } from "@/lib/types"

export async function optimizeMix(req: MixRequest): Promise<string> {
    const startState = new Set([req.initialEffect])
    const [profit, path] = searchOptimal(startState, req.maxSteps)

    const steps = []
    let currentState = startState

    for (const substance of path) {
        const newState = applySubstance(currentState, substance)
        const multiplier = stateProfit(newState)
        const sellPrice = req.basePrice * (1 + multiplier)

        steps.push({
            step: substance,
            effects: Array.from(newState).sort(),
            multiplier: Number(multiplier.toFixed(2)),
            sellPrice: Number(sellPrice.toFixed(2)),
        })

        currentState = newState
    }

    const result: OptimizationResult = {
        initialEffect: req.initialEffect,
        basePrice: req.basePrice,
        maxSteps: req.maxSteps,
        finalProfitMultiplier: Number(profit.toFixed(2)),
        finalSellPrice: Number((req.basePrice * (1 + profit)).toFixed(2)),
        bestSequence: path,
        steps,
    }

    // Store the result in localStorage via client-side script
    // Instead of using cookies directly, we'll use localStorage in the client component

    // Let's create a server-side state store
    if (typeof globalThis.mixerResults === "undefined") {
        // Initialize the global store if it doesn't exist
        globalThis.mixerResults = new Map<string, OptimizationResult>()
    }

    // Generate a unique ID for this result
    const resultId = Date.now().toString()

        // Store the result in the server-side state
    ;(globalThis.mixerResults as Map<string, OptimizationResult>).set(resultId, result)

    // Return the result ID
    return resultId
}

// Add a function to get the result by ID
export async function getOptimizationResult(resultId: string): Promise<OptimizationResult | null> {
    if (typeof globalThis.mixerResults === "undefined") {
        return null
    }

    return (globalThis.mixerResults as Map<string, OptimizationResult>).get(resultId) || null
}
