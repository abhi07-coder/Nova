import { howItWorks } from "../data"

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Up and running in minutes
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            No lengthy onboarding. No complicated setup. Just sign up and
            start building with your team right away.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((item, index) => (
            <div
              key={item.step}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div className="text-5xl font-bold text-indigo-100 dark:text-indigo-900 mb-4">
                {item.step}
              </div>
              {index < howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-indigo-200 dark:bg-indigo-800 z-10" />
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks