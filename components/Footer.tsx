import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100/50 overflow-hidden">
            {/* Content */}
            <div className="p-10">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                {/* Brand */}
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    Pathly
                  </h3>
                  <p className="text-sm text-gray-700">
                    Your AI Career Path Guide for International Students
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/resume" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Resume Review
                      </Link>
                    </li>
                    <li>
                      <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Skill Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/companies" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Companies
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/disclaimer" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookie-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-gray-900 font-semibold mb-4">Contact Us</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="mailto:support@pathly.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        support@pathly.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@pathly.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        contact@pathly.com
                      </a>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Contact Form
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-blue-200/50 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-gray-600">
                    © {currentYear} Pathly. All rights reserved.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Terms
                    </Link>
                    <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
