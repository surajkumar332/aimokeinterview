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

  const getQuestion = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          level,
        }),
      });

      const data = await res.json();

      setQuestion(data.question);
      setAnswer("");
      setFeedback("");
      setScore("");
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const getFeedback = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      const data = await res.json();

      setFeedback(data.feedback);

      const match = data.feedback.match(/(\d+)\s*\/\s*10/);
      const extractedScore = match ? match[1] : "0";

      setScore(extractedScore);

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
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-black rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 text-center mb-6">
          AI Mock Interview
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            getQuestion();
          }}
        >
          <input
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category (JavaScript, React, HR Round, Aptitude)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <div className="flex flex-wrap gap-3 ml-50 mt-4">
            {["Beginner", "Intermediate", "Advanced"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`px-4 py-2 rounded-lg border text-sm sm:text-base cursor-pointer transition
                  ${
                    level === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-black hover:bg-gray-300"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full ml-75 sm:w-auto bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg cursor-pointer disabled:opacity-50"
          >
            Get Question
          </button>
        </form>

        {question && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">
              Question:
            </h3>

            <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg leading-relaxed">
              {question}
            </div>

            <textarea
              className="w-full mt-4 bg-gray-800 border border-gray-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={6}
            />

            <button
              onClick={getFeedback}
              disabled={loading}
              className="mt-4 w-full sm:w-auto bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg cursor-pointer disabled:opacity-50"
            >
              Submit Answer
            </button>
          </div>
        )}

        {feedback && (
          <div className="mt-8">
            <div className="bg-blue-100 text-black p-5 rounded-xl shadow">
              <h3 className="text-lg font-semibold">
                Feedback
              </h3>

              <p className="mt-2 whitespace-pre-wrap">
                {feedback}
              </p>
            </div>

            <div className="bg-green-100 text-black p-5 rounded-xl shadow mt-4">
              <h3 className="text-lg font-semibold">
                Score
              </h3>

              <p className="text-3xl font-bold mt-2">
                {score}/10
              </p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-2 mt-6 text-yellow-400">
            <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}