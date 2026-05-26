import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* navbar */}
      <Navbar />
      {/* main */}

      <section className="text-center px-6 py-24">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Crack Interviews with <span className="text-indigo-400">AI</span>
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Practice real interview questions in JavaScript, React, HR, and Aptitude.
          Get instant AI feedback, scoring, and improvement suggestions like a real interviewer.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/interview"
            className="px-6 py-3 bg-indigo-600 rounded-xl text-lg hover:bg-indigo-700"
          >
            Start Mock Interview
          </a>

          <a
            href="#how"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:border-white"
          >
            How it works
          </a>
        </div>
      </section>
      {/* starts */}

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10 py-10 text-center">
        <div>
          <h3 className="text-3xl font-bold text-indigo-400">10+</h3>
          <p className="text-gray-400">Question Types</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-400">AI</h3>
          <p className="text-gray-400">Powered Feedback</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-400">100%</h3>
          <p className="text-gray-400">Free Practice</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-indigo-400">Real</h3>
          <p className="text-gray-400">Interview Experience</p>
        </div>
      </section>

      {/*features  */}
      <section id="features" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Smart Question Engine</h3>
            <p className="text-gray-400 mt-2">
              AI generates role-based interview questions tailored to your skill level.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Instant Feedback</h3>
            <p className="text-gray-400 mt-2">
              Get detailed answer evaluation with scoring and improvement tips.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">HR Simulation</h3>
            <p className="text-gray-400 mt-2">
              Practice real HR interview rounds with behavioral and situational questions.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Performance Tracking</h3>
            <p className="text-gray-400 mt-2">
              Track your progress with score and skill improvement charts.
            </p>
          </div>

          {/* <div className="bg-gray-900 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold">Voice Interview Mode</h3>
      <p className="text-gray-400 mt-2">
        Practice spoken interviews with AI voice-based interaction.
      </p>
    </div> */}

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Real-Time Suggestions</h3>
            <p className="text-gray-400 mt-2">
              Get hints and answer guidance while practicing interviews.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold">Company-Specific Prep</h3>
            <p className="text-gray-400 mt-2">
              Prepare questions based on top companies like TCS, Infosys, and startups.
            </p>
          </div>



        </div>
      </section>
      {/* hoe its work */}
      <section id="how" className="px-10 py-16 bg-gray-900/30">
        <h2 className="text-3xl font-bold text-center mb-10">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold">1. Click On Start Moke Interview</h3>
            <p className="text-gray-400 mt-2">Go to Interview Page</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Answer Questions</h3>
            <p className="text-gray-400 mt-2">10 AI-generated questions</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Get Score</h3>
            <p className="text-gray-400 mt-2">AI gives performance report</p>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section id="testimonials" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          What users say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-2xl">
            <p className="text-gray-300">
              “Helped me crack my first frontend interview!”
            </p>
            <span className="text-indigo-400 mt-3 block">— Student</span>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <p className="text-gray-300">
              “Feels like real HR interview practice.”
            </p>
            <span className="text-indigo-400 mt-3 block">— Developer</span>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl">
            <p className="text-gray-300">
              “Best AI interview tool for beginners.”
            </p>
            <span className="text-indigo-400 mt-3 block">— Job Seeker</span>
          </div>
        </div>
      </section>
      {/* cta */}
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">
          Ready to crack your interview?
        </h2>

        <p className="text-gray-400 mt-4">
          Start practicing now and boost your confidence
        </p>

        <a
          href="/interview"
          className="mt-6 inline-block px-8 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700"
        >
          Start Free Interview
        </a>
      </section>

      {/* footer */}
      <Footer />

    </div>
  );
}