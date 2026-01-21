# Pathly - Your AI Career Path Guide

A comprehensive AI-powered web application designed to help F-1 international students in the US secure internships. Pathly uses advanced AI to provide intelligent resume fixes, skill gap analysis, visa-friendly company recommendations, AI-powered guidance, and event discovery.

## Features

### 🤖 AI-Powered Features

1. **AI Resume Analyzer**
   - AI-powered ATS score calculation
   - Intelligent formatting issue detection
   - AI-generated impact-focused bullet point rewrites
   - Missing metrics suggestions
   - Keyword recommendations for target roles

2. **AI Skill Gap Analyzer**
   - AI compares your skills against real job postings
   - Missing skills ranked by importance
   - Existing strengths identification
   - AI-generated 2-4 week learning plan suggestions

3. **AI Company Matcher**
   - AI-powered visa-friendliness scoring
   - Industry and location filtering
   - Intelligent company recommendations with intern roles
   - Skills requirements and application links

4. **AI Career Assistant**
   - Chat interface powered by AI
   - Instant answers to common questions (sponsorship, CPT, OPT)
   - AI-generated networking tips for international students
   - **Important:** Always includes disclaimers - not legal advice

5. **AI Event Finder**
   - AI-powered discovery of conferences, hackathons, and career fairs
   - Smart filtering by type, field, location, and cost
   - Curated list of relevant events

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
INTERNATIONAL/
├── app/
│   ├── dashboard/      # Main dashboard page
│   ├── resume/          # Resume review feature
│   ├── skills/          # Skill gap analyzer
│   ├── companies/       # Company targeting
│   ├── assistant/       # AI helper chat
│   ├── events/          # Events finder
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   └── Navigation.tsx   # Navigation component
└── package.json
```

## Pages

- `/` - Landing page with problem statement and feature overview
- `/dashboard` - Main hub with quick actions and progress tracking
- `/resume` - Resume review and improvement suggestions
- `/skills` - Skill gap analysis and learning plans
- `/companies` - Visa-friendly company recommendations
- `/assistant` - AI-powered chat for career and visa questions
- `/events` - Browse and filter events, conferences, and career fairs

## Current Status

This is an MVP (Minimum Viable Product) with mock data and simulated API responses. Future enhancements will include:

- Backend API integration
- Real ATS scoring algorithms
- Actual job posting data integration
- User authentication and progress tracking
- File upload for resume parsing
- Real-time AI chat integration
- Database for events and companies

## Important Notes

⚠️ **Legal Disclaimer:** The AI assistant provides general guidance only, not legal advice. Users should always verify information with their DSO (Designated School Official) or university international office for specific visa and work authorization questions.

## License

MIT
