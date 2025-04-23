import type { OptimizationResult } from "@/lib/types"

declare global {
    var mixerResults: Map<string, OptimizationResult> | undefined
}
