export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
        />

        <button className="w-full bg-green-600 p-3 rounded-lg hover:bg-green-700">
          Create Account
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account? <a href="/sign-in" className="text-blue-400">Login</a>
        </p>

      </div>
    </div>
  );
}