export interface MixRequest {
    initialEffect: string | null
    basePrice: number
    maxSteps: number
}

export interface OptimizationStep {
    step: string
    effects: string[]
    multiplier: number
    sellPrice: number
}

export interface OptimizationResult {
    initialEffect: string | null
    basePrice: number
    maxSteps: number
    finalProfitMultiplier: number
    finalSellPrice: number
    bestSequence: string[]
    steps: OptimizationStep[]
}
