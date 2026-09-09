import { features } from "../data"

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything your team needs
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            NOVA brings together all the tools your team needs to plan, execute
            and deliver — in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features