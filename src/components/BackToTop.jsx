import { useState, useEffect } from "react"

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full 
            bg-linear-to-tr from-indigo-600 to-violet-500 text-white 
            shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 
            hover:scale-110 active:scale-95 
            flex items-center justify-center 
            group transition-all duration-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
            }`}
        >
                {/* Smooth arrow icon with slight float animation on hover */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    )
}

export default BackToTop