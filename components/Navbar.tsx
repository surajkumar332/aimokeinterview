import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-8 py-5 border-b border-gray-800">

      <Link href="/" className="text-indigo-400 font-bold text-xl">
        AI Interview
      </Link>

      <div className="flex gap-6 text-gray-300">
        <Link href="/interview">Interview</Link>
        <Link href="/companies">companies</Link>
        <Link href="/sign-up">Account</Link>
      </div>

    </nav>
  );
}