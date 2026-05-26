"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("interview");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h1>Result</h1>

      {data ? (
        <>
          <p><b>Question:</b> {data.question}</p>
          <p><b>Answer:</b> {data.answer}</p>
          <p><b>Feedback:</b> {data.feedback}</p>
        </>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}