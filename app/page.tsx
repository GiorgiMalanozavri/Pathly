"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import UniversityLogo from "@/components/UniversityLogo";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const universities = [
    { name: "MIT", abbreviation: "MIT", color: "#A31F34" },
    { name: "Stanford", abbreviation: "S", color: "#8C1515" },
    { name: "Harvard", abbreviation: "H", color: "#A51C30" },
    { name: "UC Berkeley", abbreviation: "UCB", color: "#003262" },
    { name: "CMU", abbreviation: "CMU", color: "#C41230" },
    { name: "Cornell", abbreviation: "C", color: "#B31B1B" },
    { name: "NYU", abbreviation: "NYU", color: "#57068C" },
    { name: "Columbia", abbreviation: "CU", color: "#75AADB" },
    { name: "UCLA", abbreviation: "UCLA", color: "#2774AE" },
    { name: "USC", abbreviation: "USC", color: "#990000" },
    { name: "Georgia Tech", abbreviation: "GT", color: "#B3A369" },
    { name: "UT Austin", abbreviation: "UT", color: "#BF5700" },
    { name: "Princeton", abbreviation: "P", color: "#FF8F00" },
    { name: "Yale", abbreviation: "Y", color: "#0F4D92" },
    { name: "Duke", abbreviation: "D", color: "#012169" },
    { name: "Northwestern", abbreviation: "NU", color: "#4E2A84" },
    { name: "UChicago", abbreviation: "UC", color: "#800000" },
    { name: "Penn", abbreviation: "UP", color: "#011F5B" },
  ];

  const places = [
    { name: "New York", icon: "🗽", delay: 0 },
    { name: "San Francisco", icon: "🌉", delay: 100 },
    { name: "Seattle", icon: "☕", delay: 200 },
    { name: "Los Angeles", icon: "🎬", delay: 300 },
    { name: "Chicago", icon: "🏙️", delay: 400 },
    { name: "Boston", icon: "🎓", delay: 500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements - Light Blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-xl">🤖</span>
            <span className="text-sm font-semibold text-blue-700">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Pathly
            </span>
            <span className="block text-gray-800 mt-2">Your AI Career Path Guide</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            AI-powered internship success for international students
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              href="/dashboard"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Get Started
            </Link>
            <Link
              href="/resume"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-md"
            >
              Try Resume Review
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-16">
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-xs text-gray-600 mt-1">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-xs text-gray-600 mt-1">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-xs text-gray-600 mt-1">Companies</div>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Section - Places Coming Out */}
        <div className="max-w-6xl mx-auto mt-16 mb-12 relative">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Connecting International Students Across the Globe
          </h2>
          
          {/* Globe/Map Background */}
          <div className="relative h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl overflow-hidden border-2 border-blue-200">
            {/* Animated Globe */}
            <div 
              className="absolute inset-0 flex items-center justify-center z-10"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.2, 50)}px) scale(${1 + Math.min(scrollY * 0.001, 0.1)})`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="text-8xl opacity-25">🌍</div>
            </div>

            {/* Plane Flying Animation */}
            <div
              className="absolute z-20"
              style={{
                top: `${50 + Math.sin(scrollY * 0.01) * 10}%`,
                left: `${-10 + (scrollY * 0.15)}%`,
                transform: `rotate(${Math.min(scrollY * 0.1, 15)}deg)`,
                opacity: scrollY > 50 ? Math.min((scrollY - 50) / 100, 1) : 0,
                transition: 'opacity 0.3s ease-out',
              }}
            >
              <div className="text-4xl">✈️</div>
            </div>

            {/* Places Appearing on Scroll - Triggered Earlier */}
            {places.map((place, idx) => {
              const triggerPoint = 100 + idx * 80; // Much earlier trigger
              const isVisible = scrollY > triggerPoint;
              const translateY = isVisible ? 0 : 50;
              const opacity = isVisible ? 1 : 0;
              const scale = isVisible ? 1 : 0.7;
              
              const positions = [
                { top: "15%", left: "12%" },
                { top: "12%", right: "18%" },
                { top: "45%", left: "8%" },
                { top: "42%", right: "12%" },
                { top: "72%", left: "15%" },
                { top: "68%", right: "20%" },
              ];

              return (
                <div
                  key={idx}
                  className="absolute bg-white rounded-lg shadow-lg p-3 border-2 border-blue-200 flex items-center gap-2 transition-all duration-500 z-30"
                  style={{
                    ...positions[idx],
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: opacity,
                  }}
                >
                  <span className="text-2xl">{place.icon}</span>
                  <div>
                    <div className="font-bold text-blue-700 text-sm">{place.name}</div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Used By Section with Logos - Smaller */}
        <div className="max-w-7xl mx-auto mt-12 mb-8">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Trusted by International Students at
          </p>
          <div className="relative overflow-hidden h-16">
            <div className={`flex gap-4 ${mounted ? 'animate-scroll' : ''}`}>
              {universities.map((uni, idx) => (
                <div key={`set1-${idx}`} className="flex-shrink-0">
                  <UniversityLogo
                    name={uni.name}
                    abbreviation={uni.abbreviation}
                    color={uni.color}
                  />
                </div>
              ))}
              {universities.map((uni, idx) => (
                <div key={`set2-${idx}`} className="flex-shrink-0">
                  <UniversityLogo
                    name={uni.name}
                    abbreviation={uni.abbreviation}
                    color={uni.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Seamless Design */}
        <div className="max-w-4xl mx-auto mt-20 mb-0">
          <div className="bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-blue-50/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100/50 overflow-hidden relative">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Content */}
            <div className="relative p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/60 rounded-full mb-6 shadow-md">
                <span className="text-3xl">🚀</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ready to Start Your Journey?
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of international students landing their dream internships with AI-powered guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Link
                  href="/dashboard"
                  className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started →
                </Link>
                <Link
                  href="/resume"
                  className="px-10 py-4 bg-white/80 text-blue-600 border-2 border-blue-300 rounded-xl font-bold text-lg hover:bg-white hover:border-blue-400 transition-all shadow-md"
                >
                  Try Resume Review
                </Link>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-200/50">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">10K+</div>
                  <div className="text-xs text-gray-600">Students Helped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-xs text-gray-600">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
