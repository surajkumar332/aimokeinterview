"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    try {
      const user = {
        name,
        email,
        password,
      };
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const existingUser = JSON.parse(storedUser);

        if (existingUser.email === email) {
          Swal.fire({
            text: "Email already exists",
            width: "fit-content",
            showConfirmButton: false,
            timer: 2000,
          });
          return;
        }
      }
      localStorage.setItem("user", JSON.stringify(user));
      Swal.fire({
        text: "Account created successfully",
        width: "fit-content",
        showConfirmButton: false,
        timer: 2000
      })
    } catch (error) {
      Swal.fire({
        text: "Error",
        width: "fit-content",
        showConfirmButton: false,
        timer: 2000
      })
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-8">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Sign Up
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-green-500 text-sm sm:text-base"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-green-500 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-green-500 text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full bg-green-600 hover:bg-green-700 transition duration-300 p-3 rounded-lg font-semibold cursor-pointer text-sm sm:text-base"
          >
            Create Account
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}