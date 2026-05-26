"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState("");
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("Beginner");

  // 1. Get Question
  const getQuestion = async () => {
    setLoading(true);

    const res = await fetch("/api/question", {
      method: "POST",
      body: JSON.stringify({ category, level: level || "Beginner" }),
    });

    const data = await res.json();
    setQuestion(data.question);

    setAnswer("");
    setFeedback("");
    setScore("");

    setLoading(false);
  };

  // 2. Get Feedback
  const getFeedback = async () => {
    setLoading(true);

    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ question, answer }),
    });

    const data = await res.json();

    setFeedback(data.feedback);

    // extract score from AI text (like 8/10)
    const match = data.feedback.match(/(\d+)\s*\/\s*10/);
    const extractedScore = match ? match[1] : "0";

    setScore(extractedScore);

    // save in session storage 
    sessionStorage.setItem(
      "interview",
      JSON.stringify({
        category,
        question,
        answer,
        feedback: data.feedback,
        score: extractedScore,
      })
    );

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-2xl bg-black shadow-xl rounded-2xl p-6 text-white">

        <h1 className="text-3xl font-bold text-blue-500 mb-5">
          AI Mock Interview
        </h1>

        {/* FORM ADDED */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getQuestion();
          }}
        >
          {/* Category Input */}
          <input
            className="w-full border border-gray-300 text-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category (JS, React, Hr Round, Aptitude)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <div className="flex gap-3 mt-4">
            {["Beginner", "Intermediate", "Advanced"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`px-4 py-2 rounded-lg border cursor-pointer 
                    ${level === item
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black hover:bg-gray-400"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-5 py-2 rounded-lg disabled:opacity-50"
          >
            Get Question
          </button>
        </form>

        {/* Question */}
        {question && (
          <div className="mt-6">

            <h3 className="text-xl font-semibold mb-2">
              Question:
            </h3>

            <div className="bg-gray-800 h-fit text-gray-400 p-4 rounded-lg">
              {question}
            </div>

            {/* Answer */}
            <textarea
              className="w-full border border-gray-300 text-gray-200 rounded-lg p-3 mt-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={5}
            />

            <button
              onClick={getFeedback}
              disabled={loading}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg disabled:opacity-50"
            >
              Submit Answer
            </button>

          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className="mt-6">

            <div className="bg-blue-100 p-4 rounded-lg text-black">
              <h3 className="text-lg font-semibold">
                Feedback:
              </h3>

              <p className="mt-2">{feedback}</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg mt-4 text-black">
              <h3 className="text-lg font-semibold">
                Score:
              </h3>

              <p className="text-2xl font-bold">
                {score}/10
              </p>
            </div>

          </div>
        )}

        {loading && (
          <p className="text-yellow-400 mt-4">
            Loading...
          </p>
        )}

      </div>
    </div>
  );
}