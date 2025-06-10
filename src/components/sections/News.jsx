// src/components/sections/News.jsx
import React from 'react';

const NewsCard = ({ date, month, title, description, author, comments, category }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 bg-gray-200">
      <img 
        src={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='400' height='300' fill='%2332CD32'/><circle cx='200' cy='150' r='60' fill='%23FFD700'/><rect x='100' y='200' width='200' height='50' fill='%23228B22'/></svg>`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-2 rounded">
        <div className="text-2xl font-bold">{date}</div>
        <div className="text-sm uppercase">{month}</div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            {author}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.89 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            Comments: {comments}
          </span>
        </div>
        <span className="text-green-600 font-medium">{category}</span>
      </div>
    </div>
  </div>
);

const News = () => {
  const newsItems = [
    {
      date: "18",
      month: "MAR",
      title: "A Guide for Parents To Encourage Their Kids to Spend More Time Outdoors",
      description: "Spending time out in nature is one of the best things that children can do for their brain, limbs, and improve our mental abilities. When kids play outdoors, they become more creative [...]",
      author: "Green Generations Initiative",
      comments: "3",
      category: "Environment"
    },
    {
      date: "22",
      month: "FEB",
      title: "Open your hearts speech at COP26",
      description: "Open your hearts speech by our founder, Elizabeth Wathuti during the COP26 World Leaders Summit Opening ceremony in Glasgow.",
      author: "Green Generations Initiative",
      comments: "2",
      category: "Climate Action"
    },
    {
      date: "22",
      month: "FEB",
      title: "Green Generation Initiative: working towards a green future",
      description: "By Elizabeth Wanjiru Wathuti, founder of Green Generation Initiative. As a committed environmentalist, Elizabeth strongly believes that the most impactful climate movement can be led by [...]",
      author: "Green Generations Initiative",
      comments: "8",
      category: "Sustainability"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LATEST NEWS
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              month={item.month}
              title={item.title}
              description={item.description}
              author={item.author}
              comments={item.comments}
              category={item.category}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;