import type { OptimizationResult } from "@/lib/types"

declare global {
    // eslint-disable-next-line no-var
    var mixerResults: Map<string, OptimizationResult> | undefined;
}
