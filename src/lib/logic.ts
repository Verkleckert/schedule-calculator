import { effectProfit, substanceEffect, mixingRules } from "./tables"

const MAX_EFFECTS = 8 // Maximum allowed effects in a mix

// Convert a Set to a string for memoization
function setToString(set: Set<string>): string {
    return Array.from(set).sort().join(",")
}

// Apply a substance to a state and return the new state
export function applySubstance(state: Set<string>, substance: string): Set<string> {
    const newState = new Set(state)
    const inherent = substanceEffect[substance]

    // Add inherent effect if not present and if there is space
    if (!newState.has(inherent) && newState.size < MAX_EFFECTS) {
        newState.add(inherent)
    }

    // Take a snapshot before applying the mixing rules
    const snapshot = new Set(newState)

    // Apply each mixing rule only once based on the snapshot
    for (const trigger of snapshot) {
        const key = `${substance}:${trigger}`
        const newEffect = mixingRules[key]

        if (newEffect) {
            if (newState.has(trigger)) {
                newState.delete(trigger)
            }
            newState.add(newEffect)
        }
    }

    return newState
}

// Calculate the profit multiplier for a state
export function stateProfit(state: Set<string>): number {
    let total = 0
    for (const effect of state) {
        // Only use the profit value if it exists in effectProfit
        if (effect in effectProfit) {
            total += effectProfit[effect]
        } else {
            console.warn(`Unknown effect: ${effect}, using default value of 0`)
            total += 0
        }
    }
    return total
}

// Memoization cache for searchOptimal
const memoCache = new Map<string, [number, string[]]>()

// Search for the optimal sequence of substances
export function searchOptimal(state: Set<string>, stepsLeft: number): [number, string[]] {
    const stateKey = `${setToString(state)}:${stepsLeft}`

    // Check if we've already computed this state
    if (memoCache.has(stateKey)) {
        return memoCache.get(stateKey)!
    }

    if (stepsLeft === 0) {
        return [stateProfit(state), []]
    }

    let bestVal = stateProfit(state)
    let bestSeq: string[] = []

    for (const substance of Object.keys(substanceEffect)) {
        const newState = applySubstance(state, substance)
        const [val, seq] = searchOptimal(newState, stepsLeft - 1)

        if (val > bestVal) {
            bestVal = val
            bestSeq = [substance, ...seq]
        }
    }

    // Cache the result
    memoCache.set(stateKey, [bestVal, bestSeq])

    return [bestVal, bestSeq]
}
