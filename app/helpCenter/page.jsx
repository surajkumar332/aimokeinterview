export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white-800 mb-10">
            Help Center
          </h1>

          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                Getting Started
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Create an account, choose an interview category, and start
                practicing with AI-powered mock interviews.
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6 hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                How AI Mock Interviews Work
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform generates interview questions and provides instant
                feedback to help you improve your interview skills and
                confidence.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-purple-600 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Can I retake an interview?
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Yes, you can practice unlimited times.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Will I receive feedback?
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Yes, AI-generated feedback is provided after each session.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Which devices are supported?
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Desktop, tablet, and mobile browsers are supported.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}