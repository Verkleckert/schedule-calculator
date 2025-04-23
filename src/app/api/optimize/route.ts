import { type NextRequest, NextResponse } from "next/server"
import { searchOptimal, applySubstance, stateProfit } from "@/lib/logic"
import { effectProfit } from "@/lib/tables"
import type { MixRequest } from "@/lib/types"

export async function POST(request: NextRequest) {

    try {
        const req = (await request.json()) as MixRequest

        // Handle case where initialEffect is empty (no initial effect)
        const startState = new Set(req.initialEffect ? [req.initialEffect] : [])
        const [profit, path] = searchOptimal(startState, req.maxSteps)

        const steps = []
        let currentState = startState


        for (const substance of path) {
            const newState = applySubstance(currentState, substance)

            // Debug each effect's contribution to the profit
            let totalProfit = 0
            for (const effect of newState) {
                const effectValue = effectProfit[effect] || 0.5
                console.log(`  ${effect}: ${effectValue}`)
                totalProfit += effectValue
            }

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

        const response = {
            initialEffect: req.initialEffect || null,
            basePrice: req.basePrice,
            maxSteps: req.maxSteps,
            finalProfitMultiplier: Number(profit.toFixed(2)),
            finalSellPrice: Number((req.basePrice * (1 + profit)).toFixed(2)),
            bestSequence: path,
            steps,
        }

        return NextResponse.json(response)
    } catch (error) {
        console.error("Error in optimize endpoint:", error)
        return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
    }
}
