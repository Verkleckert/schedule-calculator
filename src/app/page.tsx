import { MixerForm } from "@/components/mixer-form"
import { MixerResults } from "@/components/mixer-results"
import { SubstanceInfo } from "@/components/substance-info"

export default function Home() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Substance Effect Mixer</h1>
                <p className="text-gray-600 mb-8 text-center">Calculate the optimal mixing sequence to maximize profit</p>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <MixerForm />
                    <MixerResults />
                </div>

                <SubstanceInfo />
            </div>
        </div>
    )
}
