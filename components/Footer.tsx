import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-10">

      <div className="max-w-9xl mx-auto ml-30 px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-indigo-400">
            AI Mock Interview
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Practice real interviews with AI feedback. Improve your skills and crack your dream job.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/">Home</Link>
            <Link href="/interview">Interview</Link>
            <Link href="/interview">Result</Link>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Mock Interview. Built for developers 🚀
      </div>

    </footer>
  );
}