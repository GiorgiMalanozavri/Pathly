"use client";

import { useState } from "react";

export default function ResumePage() {
  const [resumeText, setResumeText] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!resumeText.trim() || !targetRole.trim()) {
      alert("Please enter your resume text and select a target role");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call - in production, this would call your backend
    setTimeout(() => {
      const mockResults = {
        atsScore: 72,
        formattingIssues: [
          "Missing contact information header",
          "Inconsistent date formats",
          "No keywords section",
        ],
        improvedBullets: [
          {
            original: "Worked on software projects",
            improved: "Developed 3 full-stack web applications using React and Node.js, improving user engagement by 40%",
          },
          {
            original: "Helped with data analysis",
            improved: "Analyzed datasets with Python and SQL, creating visualizations that informed 5 strategic business decisions",
          },
        ],
        missingMetrics: [
          "Add quantifiable results to your experience section",
          "Include project impact numbers (users, revenue, efficiency gains)",
          "Specify team sizes and collaboration scope",
        ],
        keywordSuggestions: [
          "Agile methodology",
          "RESTful APIs",
          "Version control (Git)",
          "Test-driven development",
          "Cloud platforms (AWS/Azure)",
        ],
      };
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <span className="text-xl">🤖</span>
            <span className="text-sm font-semibold text-blue-700">Powered by AI</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Resume Analyzer</h1>
          <p className="text-lg text-gray-600">Get intelligent resume analysis powered by advanced AI</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Role
            </label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a role...</option>
              <option value="software-engineering-intern">Software Engineering Intern</option>
              <option value="data-science-intern">Data Science Intern</option>
              <option value="product-management-intern">Product Management Intern</option>
              <option value="business-analyst-intern">Business Analyst Intern</option>
              <option value="marketing-intern">Marketing Intern</option>
              <option value="finance-intern">Finance Intern</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Paste Your Resume Text
            </label>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your resume content here... (Name, Education, Experience, Projects, Skills, etc.)"
              className="w-full h-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-2">
              Note: For MVP, paste text format. File upload coming soon.
            </p>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isAnalyzing ? "🤖 AI is analyzing..." : "🤖 Analyze with AI"}
          </button>
        </div>

        {results && (
          <div className="space-y-6">
            {/* ATS Score */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">ATS Score</h2>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-blue-600">{results.atsScore}/100</div>
                <div>
                  <div className="w-64 bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full"
                      style={{ width: `${results.atsScore}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {results.atsScore >= 80
                      ? "Excellent! Your resume is ATS-friendly."
                      : results.atsScore >= 60
                      ? "Good, but there's room for improvement."
                      : "Needs significant work to pass ATS filters."}
                  </p>
                </div>
              </div>
            </div>

            {/* Formatting Issues */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Formatting Issues</h2>
              <ul className="space-y-2">
                {results.formattingIssues.map((issue: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-gray-700">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Improved Bullets */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Improved Bullet Points</h2>
              <div className="space-y-4">
                {results.improvedBullets.map((item: any, idx: number) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-500 mb-1">Before:</p>
                    <p className="text-gray-700 mb-3">{item.original}</p>
                    <p className="text-sm text-green-600 mb-1">After:</p>
                    <p className="text-gray-900 font-medium">{item.improved}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Metrics */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Metrics Here</h2>
              <ul className="space-y-2">
                {results.missingMetrics.map((metric: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">📊</span>
                    <span className="text-gray-700">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keyword Suggestions */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Keyword Suggestions</h2>
              <p className="text-gray-600 mb-4">
                Add these keywords to improve your ATS score for "{targetRole}":
              </p>
              <div className="flex flex-wrap gap-2">
                {results.keywordSuggestions.map((keyword: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Report Button */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Ready to improve your resume?</h3>
              <p className="mb-4 opacity-90">
                Use these suggestions to create an ATS-friendly, impact-focused resume.
              </p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download Full Report (Coming Soon)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
