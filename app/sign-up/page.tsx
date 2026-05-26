"use client";

import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignup}
          className="w-full bg-green-600 p-3 rounded-lg hover:bg-green-700"
        >
          Create Account
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <a href="/sign-in" className="text-blue-400">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}