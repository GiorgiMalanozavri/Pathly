"use client";

import { useState } from "react";

export default function CompaniesPage() {
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<any[]>([]);

  const handleSearch = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockCompanies = [
        {
          name: "Microsoft",
          visaScore: 95,
          industry: "Technology",
          location: "Seattle, WA / Remote",
          whyRecommended: "Known for strong F-1/OPT/CPT support, large intern program",
          internRoles: ["Software Engineering", "Data Science", "Product Management"],
          skills: ["C#, Azure, .NET", "Python, SQL", "Agile, Product Strategy"],
          applicationLink: "https://careers.microsoft.com",
        },
        {
          name: "Google",
          visaScore: 90,
          industry: "Technology",
          location: "Mountain View, CA / Remote",
          whyRecommended: "Excellent sponsorship track record, diverse intern opportunities",
          internRoles: ["Software Engineering", "UX Design", "Business Strategy"],
          skills: ["Java, Python, Go", "Figma, User Research", "Analytics, Strategy"],
          applicationLink: "https://careers.google.com",
        },
        {
          name: "Amazon",
          visaScore: 88,
          industry: "Technology",
          location: "Seattle, WA / Multiple",
          whyRecommended: "Large intern cohort, clear OPT/CPT policies",
          internRoles: ["Software Development", "Data Engineering", "Operations"],
          skills: ["Java, AWS", "Python, Spark", "Supply Chain, Analytics"],
          applicationLink: "https://www.amazon.jobs",
        },
        {
          name: "Goldman Sachs",
          visaScore: 85,
          industry: "Finance",
          location: "New York, NY",
          whyRecommended: "Strong international student program, H-1B sponsorship",
          internRoles: ["Technology", "Investment Banking", "Risk Management"],
          skills: ["Java, Python", "Financial Modeling", "Risk Analysis"],
          applicationLink: "https://www.goldmansachs.com/careers",
        },
        {
          name: "JP Morgan Chase",
          visaScore: 82,
          industry: "Finance",
          location: "New York, NY / Multiple",
          whyRecommended: "Diverse tech roles, good visa support",
          internRoles: ["Software Engineering", "Data Analytics", "Quantitative Analysis"],
          skills: ["Java, Python", "SQL, Tableau", "Statistics, Python"],
          applicationLink: "https://careers.jpmorgan.com",
        },
      ];
      setCompanies(mockCompanies);
      setIsLoading(false);
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-xl">🎯</span>
            <span className="text-sm font-semibold text-purple-700">AI-Powered Matching</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Company Matcher</h1>
          <p className="text-lg text-gray-600">AI finds visa-friendly companies that match your profile</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Industries</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="consulting">Consulting</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail/E-commerce</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location Preference
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Any Location</option>
                <option value="remote">Remote</option>
                <option value="west-coast">West Coast</option>
                <option value="east-coast">East Coast</option>
                <option value="midwest">Midwest</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? "🎯 AI is matching..." : "🎯 Find Companies with AI"}
          </button>
        </div>

        {companies.length > 0 && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Visa-friendliness scores are based on heuristics (company size, 
                historical sponsorship data, intern program size). Always verify current policies 
                and check with your DSO for specific visa questions.
              </p>
            </div>

            {companies.map((company, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h2>
                    <p className="text-gray-600">{company.industry} • {company.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-gray-700">Visa Score:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${getScoreColor(company.visaScore)}`}
                            style={{ width: `${company.visaScore}%` }}
                          ></div>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{company.visaScore}/100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Why Recommended:</h3>
                  <p className="text-gray-700">{company.whyRecommended}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Common Intern Roles:</h3>
                  <div className="flex flex-wrap gap-2">
                    {company.internRoles.map((role: string, roleIdx: number) => (
                      <span
                        key={roleIdx}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Skills They Look For:</h3>
                  <p className="text-gray-700 text-sm">{company.skills}</p>
                </div>

                <a
                  href={company.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Apply Here →
                </a>
              </div>
            ))}
          </div>
        )}

        {companies.length === 0 && !isLoading && (
          <div className="bg-white p-12 rounded-xl shadow-md text-center">
            <p className="text-gray-600 text-lg">
              Select your preferences and click "Find Companies" to see visa-friendly recommendations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
