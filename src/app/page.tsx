import { MixerForm } from "@/components/mixer-form";
import { MixerResults } from "@/components/mixer-results";
import { SubstanceInfo } from "@/components/substance-info";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Schedule I Calculator
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Calculate the optimal mixing sequence to maximize profit
        </p>

        <div className="bg-card border-border mb-8 rounded-lg border p-6">
          <MixerForm />
          <MixerResults />
        </div>

        <SubstanceInfo />
      </div>
    </div>
  );
}
