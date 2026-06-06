"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      Swal.fire({
        text: "No account found. Please sign up first",
        width: "fit-content",
        showConfirmButton: false,
        timer: 2000
      })
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.email === email && user.password === password) {
      Swal.fire({
        text: "Login Successfully",
        timer: 2000,
        width: "fit-content",
        showConfirmButton: false
      });
      router.push("/");
    } else {
      Swal.fire({
        text: "Invalid Email or Password",
        showConfirmButton: false,
        width: "fit-content",
        timer: 2000
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-8">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Sign In
        </h2>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-600 hover:bg-red-500 text-white p-3 mb-4 rounded-lg cursor-pointer"
        >
          Sign in with Google
        </button>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500 text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-500 text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 p-3 rounded-lg font-semibold cursor-pointer text-sm sm:text-base"
          >
            Login
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}