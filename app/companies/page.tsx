"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Companies() {
  const companies = ["TCS", "Infosys","Tech Mahindra",  "Wipro", "Startup"];

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState("");

  const handleClick = async (company: string) => {
    setLoading(true);
    setQuestions("");

    const res = await fetch("/api/getquestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        role: "Frontend Develope",
      }),
    });

    const data = await res.json();
    setQuestions(data.questions);
    setLoading(false);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Choose Company
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {companies.map((c) => (
          <div
            key={c}
            onClick={() => handleClick(c)}
            className="bg-gray-900 p-6 rounded-2xl cursor-pointer hover:bg-gray-800"
          >
            <h2 className="text-xl font-semibold text-center">{c}</h2>
          </div>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-10 text-gray-400">
          Generating questions...
        </p>
      )}

      {/* AI Response */}
      {questions && (
        <div className="mt-10 bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4">AI Questions</h2>
          <pre className="whitespace-pre-wrap text-gray-300">
            {questions}
          </pre>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}