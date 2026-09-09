function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm text-indigo-600 font-medium uppercase tracking-widest mb-3">
            About NOVA
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Built for teams who want to move faster
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            NOVA was built out of frustration with scattered tools, endless
            meetings and lost context. We believed there had to be a better
            way — so we built it.
          </p>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
            Today, over 10,000 teams use NOVA to manage their work, automate
            the boring stuff and actually enjoy collaborating again.
          </p>
          <ul className="flex flex-col gap-4">
            {[
              "AI that learns your team's workflow",
              "Real-time collaboration without the chaos",
              "Integrates with tools you already use",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 text-white">
          <div className="flex flex-col gap-6">
            {[
              { label: "Tasks Automated Today", value: "1,284" },
              { label: "Active Projects", value: "340" },
              { label: "Team Members Online", value: "89" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 rounded-2xl px-6 py-4 flex items-center justify-between"
              >
                <span className="text-white/80 text-sm">{item.label}</span>
                <span className="text-white font-bold text-xl">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About