import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('latest');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'latest', label: 'Latest Stories' },
    { id: 'impact', label: 'Impact Reports' },
    { id: 'community', label: 'Community Voices' },
    { id: 'resources', label: 'Resources' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Empowering Youth Climate Leaders in Rural Kenya",
      excerpt: "Our youth climate action program has trained over 500 young environmental advocates across 15 counties, creating lasting change in their communities.",
      category: "Youth Empowerment",
      readTime: "4 min read",
      date: "December 15, 2024",
      author: "Sarah Wanjiku",
      type: "latest"
    },
    {
      id: 2,
      title: "Forest Restoration Project: Year One Results",
      excerpt: "A comprehensive look at our reforestation efforts that have successfully planted 10,000 indigenous trees and restored 200 hectares of degraded land.",
      category: "Conservation",
      readTime: "6 min read",
      date: "December 10, 2024",
      author: "Dr. James Mwangi",
      type: "impact"
    },
    {
      id: 3,
      title: "Building Climate Resilience in Coastal Communities",
      excerpt: "How our community resilience program is helping coastal villages adapt to rising sea levels and extreme weather events.",
      category: "Community Development",
      readTime: "5 min read",
      date: "December 8, 2024",
      author: "Grace Ochieng",
      type: "community"
    },
    {
      id: 4,
      title: "Sustainable Agriculture Training Manual Released",
      excerpt: "Our new comprehensive guide helps smallholder farmers adopt climate-smart agricultural practices to increase yields and protect the environment.",
      category: "Resources",
      readTime: "3 min read",
      date: "December 5, 2024",
      author: "Peter Kimani",
      type: "resources"
    }
  ];

  const impactStats = [
    { label: "Trees Planted", value: "10,247", trend: "+847 this month" },
    { label: "Communities Reached", value: "52", trend: "Across 8 counties" },
    { label: "Youth Trained", value: "1,234", trend: "500+ certified leaders" },
    { label: "Hectares Restored", value: "340", trend: "Target: 500 by 2025" }
  ];

  const recentUpdates = [
    {
      title: "Partnership Announcement with Kenya Forest Service",
      date: "2 days ago",
      category: "Partnership"
    },
    {
      title: "Q4 Impact Report Now Available",
      date: "1 week ago",
      category: "Report"
    },
    {
      title: "New Climate Education Program Launches",
      date: "2 weeks ago",
      category: "Program"
    }
  ];

  const testimonials = [
    {
      quote: "The agricultural training I received has transformed how I farm. My maize yield increased by 60% while using fewer resources.",
      author: "Margaret Wanjiru",
      role: "Smallholder Farmer",
      location: "Meru County"
    },
    {
      quote: "Through GGI's youth program, I've become a climate advocate in my school and community. We've planted over 300 trees this year.",
      author: "David Ochieng",
      role: "Youth Climate Leader",
      location: "Kisumu County"
    },
    {
      quote: "Our village is now better prepared for droughts thanks to the water conservation techniques we learned.",
      author: "John Mutua",
      role: "Community Leader",
      location: "Makueni County"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    if (activeTab === 'latest') return true;
    return post.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stories of Change
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the impact of our environmental conservation work through stories, 
              reports, and insights from communities across Kenya and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                Read Our Stories
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md font-semibold transition-colors duration-200">
                View Impact Reports
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            
            {/* Navigation Tabs */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-green-600 text-green-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8 mb-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <button className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-200">
                        Read Full Story →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Impact Metrics */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Impact in Numbers</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.trend}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Recent Updates */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Updates</h3>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {update.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{update.date}</span>
                      <span className="text-xs text-green-600 font-medium">{update.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-200">
                View All Updates
              </button>
            </div>

            {/* Community Testimonial */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Community Voice</h3>
              <div className="space-y-4">
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="border-t border-green-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-green-600' : 'bg-green-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Get Involved */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get Involved</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold transition-colors duration-200">
                  Share Your Story
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-md font-semibold transition-colors duration-200">
                  Subscribe to Updates
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-md font-semibold transition-colors duration-200">
                  Download Resources
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stay Informed</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get monthly updates on our conservation work and impact stories.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;