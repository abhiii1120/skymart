import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// Counter Component
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-3xl md:text-4xl font-bold text-[#c8f135] mb-2">
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();

  const statsData = [
    { value: 20000, label: "Happy Customers", suffix: "+" },
    { value: 50000, label: "Products Sold", suffix: "+" },
    { value: 4.9, label: "Customer Rating", suffix: "★" },
    { value: 99, label: "Satisfaction Rate", suffix: "%" }
  ];

  const valuesData = [
    { icon: "⚡", title: "Speed", description: "Lightning-fast checkout and delivery. No waiting, no frustration." },
    { icon: "🤝", title: "Community", description: "Built around real customer feedback, not just business metrics." },
    { icon: "✨", title: "Quality", description: "Every product is verified for quality and authenticity before listing." }
  ];

  const teamData = [
    { name: "Sandhya Mhatre", role: "CEO & Co-founder", emoji: "👩‍💻", description: "Former Amazon engineer passionate about creating better shopping experiences." },
    { name: "Abhinay Mhatre", role: "CTO & Co-founder", emoji: "👨‍💻", description: "Full-stack developer focused on performance and user experience." }
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r text-volt bg-clip-text text-transparent">
              About SkyMart
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SkyMart is a next-generation e-commerce platform built to make online
              shopping fast, fair, and enjoyable - for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-[#111] border border-white/8 rounded-2xl p-6 text-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the sections remain the same */}
      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SkyMart started in 2022 as a small side project—two engineers tired of bloated, 
              slow e-commerce experiences. We asked ourselves: why can't online shopping be 
              fast, transparent, and actually enjoyable?
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Three years later, SkyMart serves over 50,000 customers across the country. 
              We stock electronics, fashion, jewelry, and everyday essentials—all while 
              keeping our platform lightning-fast and our customers happy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We're still the same team at heart: obsessed with speed, transparency, and 
              making you feel good about every purchase you make here.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#c8f135]/10 to-green-500/10 border border-white/8 rounded-2xl p-8">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To create the most seamless and trustworthy shopping experience, 
              where quality meets affordability and every click feels right.
            </p>
          </div>
        </div>
      </div>

      {/* What We Stand For */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valuesData.map((value, index) => (
            <div 
              key={index}
              className="bg-[#111] border border-white/8 rounded-2xl p-6 text-center hover:border-[#c8f135]/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamData.map((member, index) => (
            <div 
              key={index}
              className="bg-[#111] border border-white/8 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-[#c8f135]/20 to-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-5xl">{member.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#c8f135] mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#c8f135]/10 to-green-500/10 border border-white/8 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to shop?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore thousands of products at unbeatable prices.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="bg-[#c8f135] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#d4f550] transition-all duration-300 transform hover:scale-105"
          >
            Browse Products →
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;