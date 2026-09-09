import { useState } from "react"
import { faqs } from "../data"

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Everything you need to know about NOVA. Can't find the answer?
            Feel free to contact our team.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              role="listitem"
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300"
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-indigo-600 text-xl transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className="px-6 pb-5 text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ