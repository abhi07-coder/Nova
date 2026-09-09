import { trustedCompanies } from "../data"

function TrustedBy() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-10">
          Trusted by teams at world-class companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {trustedCompanies.map((company) => (
            <span
              key={company}
              className="text-2xl font-bold text-gray-300 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-400 transition-colors duration-200 cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy