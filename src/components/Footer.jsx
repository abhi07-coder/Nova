import { navLinks } from "../data"

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact", "Status", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">

          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              NOVA
            </a>
            <p className="text-sm leading-relaxed mb-6">
              AI-powered productivity platform that helps teams manage
              projects, automate tasks and collaborate efficiently.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {["𝕏", "In", "GH", "yT"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs hover:bg-indigo-600 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2026 NOVA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer