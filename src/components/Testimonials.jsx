import { useState } from "react"
import { testimonials } from "../data"

function Testimonials() {
  const [active, setActive] = useState(0)

  function prev() {
    setActive((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1))
  }

  function next() {
    setActive((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1))
  }

  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What our customers say
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Thousands of teams love NOVA. Here's what some of them have to say.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800 shadow-sm text-center transition-colors duration-300">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            "{testimonials[active].text}"
          </p>
          <div className="flex flex-col items-center gap-2 mb-10">
            <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              {testimonials[active].avatar}
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {testimonials[active].name}
            </div>
            <div className="text-sm text-gray-400 dark:text-gray-500">
              {testimonials[active].role}
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:text-gray-300 transition-all duration-200 flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === active ? "bg-indigo-600 w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-400 hover:text-indigo-600 dark:text-gray-300 transition-all duration-200 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials