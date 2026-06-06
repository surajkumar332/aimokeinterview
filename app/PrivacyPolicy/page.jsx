export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-700 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-400 mb-10">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-center mb-10">
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information.
          </p>

          <div className="space-y-8">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                Information We Collect
              </h2>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Name and email address</li>
                <li>Account information</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                How We Use Your Information
              </h2>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Provide AI interview services</li>
                <li>Generate interview feedback</li>
                <li>Improve user experience</li>
                <li>Enhance platform security</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-yellow-600 mb-3">
                Data Security
              </h2>

              <p className="text-gray-600">
                We use industry-standard security measures to protect your
                personal information from unauthorized access, disclosure,
                or misuse.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-purple-600 mb-3">
                Third-Party Services
              </h2>

              <p className="text-gray-600">
                We may use trusted third-party services for authentication,
                analytics, cloud storage, and platform improvement.
              </p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-red-600 mb-3">
                Your Rights
              </h2>

              <p className="text-gray-600">
                You may request access, correction, or deletion of your
                personal data by contacting our support team.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Contact Us
              </h2>

              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>

              <p className="font-medium mt-3 text-green-700">
                support@aimockinterview.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}