import { useState } from "react"
import { pricingPlans } from "../data"

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            No hidden fees. No surprises. Pick the plan that works for your team.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${
              isAnnual ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${
                isAnnual ? "left-7" : "left-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
            Annual
            <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
              Save 35%
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-indigo-600 border-indigo-600 shadow-xl scale-105"
                  : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-lg"
              }`}
            >
              <h3 className={`text-lg font-semibold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-indigo-200" : "text-gray-400"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? "text-indigo-200" : "text-gray-400"}`}>
                  /month
                </span>
              </div>
              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={`text-sm font-bold ${plan.highlighted ? "text-indigo-200" : "text-indigo-600"}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-indigo-100" : "text-gray-600 dark:text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing