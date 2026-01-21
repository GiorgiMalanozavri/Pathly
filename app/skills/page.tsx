"use client";

import { useState } from "react";

export default function SkillsPage() {
  const [targetRole, setTargetRole] = useState("");
  const [resumeSkills, setResumeSkills] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!targetRole.trim() || !resumeSkills.trim()) {
      alert("Please select a role and enter your current skills");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        missingSkills: [
          { skill: "SQL", importance: "High", reason: "Required in 85% of job postings" },
          { skill: "Python", importance: "High", reason: "Core requirement for data analysis" },
          { skill: "Tableau", importance: "Medium", reason: "Preferred for visualization roles" },
          { skill: "Machine Learning Basics", importance: "Medium", reason: "Growing demand" },
          { skill: "Git/GitHub", importance: "Low", reason: "Nice to have for collaboration" },
        ],
        existingStrengths: [
          "Excel/Spreadsheets",
          "Data Analysis",
          "Statistical Methods",
        ],
        learningPlan: [
          { week: "Week 1-2", focus: "Learn SQL fundamentals (JOINs, aggregations)", resource: "SQLBolt, Mode Analytics" },
          { week: "Week 2-3", focus: "Python basics + pandas for data manipulation", resource: "Kaggle Learn, DataCamp" },
          { week: "Week 3-4", focus: "Build a portfolio project combining SQL + Python", resource: "Create GitHub project" },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
            <span className="text-xl">🧠</span>
            <span className="text-sm font-semibold text-green-700">AI-Powered Analysis</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Skill Gap Analyzer</h1>
          <p className="text-lg text-gray-600">AI compares your skills against real job requirements</p>
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
              Your Current Skills (comma-separated or list)
            </label>
            <textarea
              value={resumeSkills}
              onChange={(e) => setResumeSkills(e.target.value)}
              placeholder="e.g., Excel, Data Analysis, Statistics, R, JavaScript..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isAnalyzing ? "🧠 AI is analyzing..." : "🧠 Analyze with AI"}
          </button>
        </div>

        {results && (
          <div className="space-y-6">
            {/* Existing Strengths */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">✅ Your Strengths</h2>
              <div className="flex flex-wrap gap-2">
                {results.existingStrengths.map((skill: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Missing Skills (Priority Order)</h2>
              <div className="space-y-4">
                {results.missingSkills.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xl font-bold text-blue-600">#{idx + 1}</span>
                      <span className="text-lg font-semibold text-gray-900">{item.skill}</span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.importance === "High"
                            ? "bg-red-100 text-red-700"
                            : item.importance === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.importance} Priority
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm ml-8">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Plan */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Suggested Learning Plan (2-4 Weeks)</h2>
              <div className="space-y-4">
                {results.learningPlan.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-blue-700">{item.week}</span>
                    </div>
                    <p className="text-gray-900 font-medium mb-1">{item.focus}</p>
                    <p className="text-sm text-gray-600">Resources: {item.resource}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Next Steps</h3>
              <ul className="space-y-2 list-disc list-inside opacity-90">
                <li>Start with the highest priority skills (SQL, Python)</li>
                <li>Build a project using these skills to add to your portfolio</li>
                <li>Update your resume with new skills as you learn them</li>
                <li>Re-run this analysis in 2-4 weeks to track progress</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
