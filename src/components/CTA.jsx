import { useState } from "react"

function CTA() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit() {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.")
      return
    }
    setMessage("🎉 Welcome aboard! Check your inbox soon.")
    setEmail("")
  }

  return (
    <section className="py-24 px-6 bg-linear-to-br from-indigo-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to build better and work smarter?
        </h2>

        <p className="text-indigo-200 text-lg max-w-xl mx-auto mb-10">
          Join 10,000+ teams already using NOVA to automate their work and
          collaborate without the chaos.
        </p>

        {/* Email Input + CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white/50 bg-white/10 text-white placeholder-white/50 border border-white/20 transition-all duration-200"
          />
          <button
            onClick={handleSubmit}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-200"
          >
            Get Started Free
          </button>
        </div>

        {/* Validation Message */}
        {message && (
          <p className="text-white/80 text-sm mb-6">{message}</p>
        )}

        {/* Trust Line */}
        <p className="text-indigo-200 text-sm">
          Free 14-day trial · No credit card required · Cancel anytime
        </p>

      </div>
    </section>
  )
}

export default CTA