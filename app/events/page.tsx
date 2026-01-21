"use client";

import { useState } from "react";

interface Event {
  name: string;
  type: string;
  date: string;
  location: string;
  field: string;
  cost: string;
  link: string;
  description: string;
}

export default function EventsPage() {
  const [filters, setFilters] = useState({
    type: "",
    field: "",
    location: "",
    cost: "",
  });
  const [events] = useState<Event[]>([
    {
      name: "Grace Hopper Celebration",
      type: "Conference",
      date: "September 2024",
      location: "Orlando, FL",
      field: "Technology",
      cost: "Student: $99",
      link: "https://ghc.anitab.org",
      description: "Largest gathering of women technologists. Great for networking and job opportunities.",
    },
    {
      name: "NSBE Annual Convention",
      type: "Conference",
      date: "March 2025",
      location: "Atlanta, GA",
      field: "Engineering",
      cost: "Student: $150",
      link: "https://www.nsbe.org",
      description: "National Society of Black Engineers convention with career fair and workshops.",
    },
    {
      name: "TechCrunch Disrupt",
      type: "Conference",
      date: "October 2024",
      location: "San Francisco, CA",
      field: "Technology",
      cost: "Student: $195",
      link: "https://techcrunch.com/events",
      description: "Startup and tech conference with networking opportunities.",
    },
    {
      name: "Google I/O",
      type: "Conference",
      date: "May 2025",
      location: "Mountain View, CA",
      field: "Technology",
      cost: "Free (application required)",
      link: "https://io.google",
      description: "Google's annual developer conference. Free for students.",
    },
    {
      name: "Microsoft Build",
      type: "Conference",
      date: "May 2025",
      location: "Seattle, WA",
      field: "Technology",
      cost: "Free (virtual option)",
      link: "https://build.microsoft.com",
      description: "Microsoft's developer conference. Virtual attendance is free.",
    },
    {
      name: "HackMIT",
      type: "Hackathon",
      date: "October 2024",
      location: "Cambridge, MA",
      field: "Technology",
      cost: "Free",
      link: "https://hackmit.org",
      description: "One of the largest student hackathons. Great for building projects and networking.",
    },
    {
      name: "PennApps",
      type: "Hackathon",
      date: "January 2025",
      location: "Philadelphia, PA",
      field: "Technology",
      cost: "Free",
      link: "https://pennapps.com",
      description: "University of Pennsylvania's hackathon with sponsor companies.",
    },
    {
      name: "Career Fair - Tech Industry",
      type: "Career Fair",
      date: "Various dates",
      location: "Online",
      field: "Technology",
      cost: "Free",
      link: "https://example.com",
      description: "Virtual career fair focused on tech internships. Multiple dates throughout the year.",
    },
    {
      name: "Data Science Summit",
      type: "Conference",
      date: "November 2024",
      location: "New York, NY",
      field: "Data Science",
      cost: "Student: $299",
      link: "https://example.com",
      description: "Conference for data scientists and analysts. Networking and workshops.",
    },
    {
      name: "ProductCon",
      type: "Conference",
      date: "June 2025",
      location: "San Francisco, CA",
      field: "Product Management",
      cost: "Student: $99",
      link: "https://productcon.com",
      description: "Product management conference with career opportunities.",
    },
  ]);

  const filteredEvents = events.filter((event) => {
    if (filters.type && event.type !== filters.type) return false;
    if (filters.field && event.field !== filters.field) return false;
    if (filters.location && !event.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.cost === "free" && !event.cost.toLowerCase().includes("free")) return false;
    if (filters.cost === "paid" && event.cost.toLowerCase().includes("free")) return false;
    return true;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference":
        return "bg-blue-100 text-blue-700";
      case "Hackathon":
        return "bg-purple-100 text-purple-700";
      case "Career Fair":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full mb-4">
            <span className="text-xl">📅</span>
            <span className="text-sm font-semibold text-red-700">AI-Powered Discovery</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Event Finder</h1>
          <p className="text-lg text-gray-600">AI-powered discovery of conferences, hackathons, and career fairs</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Types</option>
                <option value="Conference">Conference</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Career Fair">Career Fair</option>
                <option value="Meetup">Meetup</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Field</label>
              <select
                value={filters.field}
                onChange={(e) => setFilters({ ...filters, field: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Fields</option>
                <option value="Technology">Technology</option>
                <option value="Data Science">Data Science</option>
                <option value="Engineering">Engineering</option>
                <option value="Product Management">Product Management</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                placeholder="City or 'Online'"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cost</label>
              <select
                value={filters.cost}
                onChange={(e) => setFilters({ ...filters, cost: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Costs</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Found <strong>{filteredEvents.length}</strong> event{filteredEvents.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-4">
          {filteredEvents.map((event, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{event.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">📅 Date</p>
                  <p className="text-gray-900 font-medium">{event.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">📍 Location</p>
                  <p className="text-gray-900 font-medium">{event.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">🎯 Field</p>
                  <p className="text-gray-900 font-medium">{event.field}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">💰 Cost</p>
                  <p className="text-gray-900 font-medium">{event.cost}</p>
                </div>
              </div>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="bg-white p-12 rounded-xl shadow-md text-center">
            <p className="text-gray-600 text-lg">No events match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
