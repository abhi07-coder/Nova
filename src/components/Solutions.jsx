import { solutions } from "../data"

function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            Solutions
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for every kind of team
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Whether you're a startup or an enterprise, NOVA adapts to the
            way your team works best.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <div className="text-4xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions