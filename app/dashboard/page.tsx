import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <span className="text-xl">🤖</span>
            <span className="text-sm font-semibold text-blue-700">AI-Powered Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your AI Dashboard</h1>
          <p className="text-lg text-gray-600">Track your progress with AI-powered insights</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Resume Score</h3>
            <p className="text-3xl font-bold text-blue-600">--</p>
            <p className="text-sm text-gray-500 mt-2">Upload your resume to get started</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Companies Found</h3>
            <p className="text-3xl font-bold text-green-600">--</p>
            <p className="text-sm text-gray-500 mt-2">Visa-friendly matches</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills to Learn</h3>
            <p className="text-3xl font-bold text-purple-600">--</p>
            <p className="text-sm text-gray-500 mt-2">Priority skills identified</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/resume"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">🤖 AI Resume Analyzer</h3>
              <p className="text-gray-600">AI-powered ATS score and improvement suggestions</p>
            </Link>
            
            <Link
              href="/skills"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-green-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">🧠 AI Skill Gap Analysis</h3>
              <p className="text-gray-600">AI identifies what skills you're missing</p>
            </Link>
            
            <Link
              href="/companies"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-purple-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">🎯 AI Company Matcher</h3>
              <p className="text-gray-600">AI finds visa-friendly employers for you</p>
            </Link>
            
            <Link
              href="/assistant"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-yellow-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">💬 AI Career Assistant</h3>
              <p className="text-gray-600">Chat with AI about visa and career questions</p>
            </Link>
            
            <Link
              href="/events"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-red-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">📅 AI Event Finder</h3>
              <p className="text-gray-600">AI-powered discovery of conferences and events</p>
            </Link>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Resume Review</span>
                <span className="text-sm text-gray-500">Not started</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Skill Analysis</span>
                <span className="text-sm text-gray-500">Not started</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Company Research</span>
                <span className="text-sm text-gray-500">Not started</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "0%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
