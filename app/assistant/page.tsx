"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI assistant for internship and visa questions. I can help with:\n\n• Answering 'Do you need sponsorship?' questions\n• CPT/OPT guidance\n• Networking tips for international students\n• Interview preparation\n\n⚠️ **Important Disclaimer:** I provide general guidance only, not legal advice. Always check with your DSO (Designated School Official) or university international office for specific visa questions.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const responses: Record<string, string> = {
        "sponsorship": `**How to answer "Do you need sponsorship?"**

For F-1 students on CPT/OPT:
- **During CPT/OPT (first 12 months):** "No, I do not require sponsorship. I am authorized to work on CPT/OPT under my F-1 visa status."
- **For OPT extension (STEM):** "I am currently on OPT and eligible for STEM extension. I do not require H-1B sponsorship at this time."
- **For future H-1B:** "I do not require sponsorship for this internship/role. For long-term employment, I would be interested in discussing sponsorship options."

**Key points:**
- Be clear and confident
- Emphasize your current work authorization
- Don't over-explain unless asked

⚠️ **Always verify with your DSO** - rules can vary by situation.`,

        "cpt": `**CPT (Curricular Practical Training) Basics**

CPT allows F-1 students to work off-campus in jobs related to their field of study.

**Requirements:**
- Must be enrolled full-time for at least one academic year
- Job must be related to your major
- Requires approval from your DSO
- Can be part-time (≤20 hrs/week) or full-time during breaks

**Common Questions:**
- **Can I do multiple internships?** Yes, but each needs CPT authorization
- **Does CPT affect OPT?** Full-time CPT for 12+ months disqualifies you from OPT
- **When to apply?** Start 2-3 weeks before your start date

⚠️ **Critical:** Always check with your DSO before accepting any offer. Rules vary by school.`,

        "opt": `**OPT (Optional Practical Training) Overview**

OPT allows F-1 students to work for up to 12 months (or 36 months with STEM extension) after graduation.

**Timeline:**
- Apply up to 90 days before graduation
- Processing takes 3-5 months (apply early!)
- Can start working once you receive EAD card
- Must find job within 90 days of OPT start date

**STEM Extension:**
- Available for certain majors (check DHS list)
- Extends OPT to 36 months total
- Requires employer E-Verify participation

⚠️ **Important:** 
- Track your unemployment days (90-day limit)
- Report employment changes to your DSO
- Keep all documents updated

**Always consult your DSO** for specific questions about your situation.`,

        "networking": `**Networking Tips for International Students**

**1. Be Transparent About Your Status**
- Mention your F-1 status early: "I'm an F-1 student authorized to work on CPT/OPT"
- Don't apologize - it's a strength (diverse perspective, multilingual, etc.)

**2. Leverage University Resources**
- Career fairs (many companies specifically recruit international students)
- Alumni networks (find international alumni who succeeded)
- International student associations

**3. Online Networking**
- LinkedIn: Connect with recruiters at visa-friendly companies
- Join groups: "International Students in Tech", "F-1 Visa Support"
- Attend virtual events and webinars

**4. Practice Your Elevator Pitch**
- Include: Your status, work authorization, value you bring
- Example: "I'm an F-1 student with CPT authorization, bringing [X skills] and international perspective..."

**5. Follow Up**
- Send thank-you notes after networking events
- Keep connections warm with periodic updates

Remember: Many companies value international talent. Your status is not a barrier - it's part of your story.`,
      };

      const lowerInput = input.toLowerCase();
      let response = "";

      if (lowerInput.includes("sponsorship") || lowerInput.includes("sponsor")) {
        response = responses.sponsorship;
      } else if (lowerInput.includes("cpt")) {
        response = responses.cpt;
      } else if (lowerInput.includes("opt")) {
        response = responses.opt;
      } else if (lowerInput.includes("network") || lowerInput.includes("connect")) {
        response = responses.networking;
      } else {
        response = `I understand you're asking about: "${input}"\n\nI can help with:\n- Sponsorship questions\n- CPT/OPT guidance\n- Networking strategies\n- Interview preparation\n\nPlease ask a more specific question, or try rephrasing. Remember, I provide general guidance only - always check with your DSO for specific visa questions.`;
      }

      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
            <span className="text-xl">💬</span>
            <span className="text-sm font-semibold text-yellow-700">AI Assistant</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Career & Visa Assistant</h1>
          <p className="text-lg text-gray-600">Chat with AI about sponsorship, CPT, OPT, and career questions</p>
        </div>

        {/* Disclaimer Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-yellow-400 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> This AI assistant provides general guidance only, not legal advice. 
                Always verify information with your DSO (Designated School Official) or university international 
                office for specific visa and work authorization questions.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-xl shadow-md flex flex-col" style={{ height: "600px" }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about sponsorship, CPT, OPT, networking, or interview prep..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                rows={2}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Questions:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "How do I answer 'Do you need sponsorship?'",
              "What is CPT?",
              "What is OPT?",
              "How do I network as an international student?",
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(q);
                  setTimeout(() => handleSend(), 100);
                }}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
