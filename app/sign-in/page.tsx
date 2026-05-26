"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      alert("Login successful");
      router.push("/companies");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-blue-400">
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}