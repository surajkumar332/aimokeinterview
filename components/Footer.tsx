import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-indigo-400">
            AI Mock Interview
          </h2>
          <p className="text-gray-400 mt-3 text-sm leading-6">
            Practice real interviews with AI feedback. Improve your skills and
            crack your dream job.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/interview" className="hover:text-white">
              Interview
            </Link>

            <Link href="/result" className="hover:text-white">
              Result
            </Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Support
          </h3>

          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/helpCenter" className="hover:text-white">
              Help Center
            </Link>

            <Link href="/contact-us" className="hover:text-white">
              Contact Us
            </Link>

            <Link href="/PrivacyPolicy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Connect
          </h3>

          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm px-4">
        © {new Date().getFullYear()} AI Mock Interview. Built for developers 🚀
      </div>
    </footer>
  );
}