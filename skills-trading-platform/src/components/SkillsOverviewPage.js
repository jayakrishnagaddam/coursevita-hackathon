import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Star } from 'lucide-react';

const SkillsOverviewPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const skills = [
    { name: 'Web Development', description: 'Learn to build responsive websites and web applications.', rating: 4.8 },
    { name: 'Data Science', description: 'Master data analysis, machine learning, and statistical modeling.', rating: 4.7 },
    { name: 'Graphic Design', description: 'Create stunning visuals for print and digital media.', rating: 4.6 },
    { name: 'Digital Marketing', description: 'Learn to promote brands and products in the digital space.', rating: 4.5 },
    { name: 'Language Learning', description: 'Immerse yourself in new languages and cultures.', rating: 4.9 },
    { name: 'Photography', description: 'Capture moments and tell stories through the lens.', rating: 4.7 },
  ];

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-6xl font-extrabold mb-8 text-center text-blue-600 tracking-tight">
        Explore Skills on our Platform
      </h1>
      
      <div className="mb-12 max-w-lg mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full border-2 border-blue-300 focus:outline-none focus:border-blue-600 text-lg shadow-md"
          />
          <Search className="absolute right-4 top-3 text-blue-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-blue-100">
            <h2 className="text-2xl font-bold mb-3 text-blue-700">{skill.name}</h2>
            <p className="text-gray-600 mb-4">{skill.description}</p>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 mr-2" fill="currentColor" />
              <span className="font-semibold text-lg">{skill.rating.toFixed(1)}</span>
            </div>
            <button 
              onClick={() => navigate('/login')} 
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center w-full shadow-md hover:shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <p className="text-center text-gray-600 mt-8 text-lg">No skills found matching your search. Try a different term.</p>
      )}

      <div className="mt-16 bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto border border-blue-100">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 text-center">Why Choose Our Platform?</h2>
        <ul className="space-y-6 text-lg text-gray-700">
          {[
            'Connect with expert mentors in various fields',
            'Flexible learning schedules to fit your lifestyle',
            'Hands-on projects to build your portfolio',
            'Networking opportunities with like-minded learners',
            'Earn certificates to showcase your new skills'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4 shadow-md">
                {index + 1}
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => navigate('/signup')} 
          className="bg-green-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Start Your Learning Journey
        </button>
      </div>
    </div>
  );
};

export default SkillsOverviewPage;