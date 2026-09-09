import { useState } from "react"

function Hero({ darkMode }) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit() {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.")
      return
    }
    setMessage("🎉 You're on the list! We'll be in touch soon.")
    setEmail("")
  }

  return (
    <section className={`py-24 px-6 transition-colors duration-300 ${
      darkMode
        ? "bg-gray-950"
        : "bg-linear-to-br from-indigo-50 via-white to-purple-50"
    }`}>
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span>⚡</span>
          <span>AI-Powered Productivity Platform</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Build Better.{" "}
          <span className="text-indigo-600">Work Smarter.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          NOVA helps teams manage projects, automate repetitive tasks and
          collaborate efficiently — all powered by AI.
        </p>

        {/* Email Input + CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-indigo-400 transition-colors duration-200"
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Get Started Free
          </button>
        </div>

        {/* Validation Message */}
        {message && (
          <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-6">{message}</p>
        )}

        {/* Social Proof */}
        <p className="text-sm text-gray-400">
          No credit card required · Trusted by{" "}
          <span className="text-gray-600 dark:text-gray-300 font-medium">10,000+ teams</span>
        </p>

      </div>
    </section>
  )
}

export default Hero