import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Define the structure of a financial term
interface FinancialTerm {
  id: number;
  name: string;
  explanation: string;
  category: string;
  difficulty: string;
  pronunciation: string;
  example: string;
}

function App() {
  // State management for the application
  const [terms, setTerms] = useState<FinancialTerm[]>([]); // All financial terms
  const [featuredTerm, setFeaturedTerm] = useState<FinancialTerm | null>(null); // Term to be featured
  const [searchTerm, setSearchTerm] = useState(''); // User's search input
  const [selectedCategory, setSelectedCategory] = useState(''); // Selected category filter
  const [selectedDifficulty, setSelectedDifficulty] = useState(''); // Selected difficulty filter

  // Fetch data when component mounts
  useEffect(() => {
    fetchTerms();
    fetchFeaturedTerm();
  }, []);

  // Fetch all financial terms from the backend
  const fetchTerms = async () => {
    try {
      const response = await axios.get<FinancialTerm[]>('http://localhost:5000/api/terms');
      setTerms(response.data);
    } catch (error) {
      console.error('Error fetching terms:', error);
    }
  };

  // Fetch a featured term from the backend
  const fetchFeaturedTerm = async () => {
    try {
      const response = await axios.get<FinancialTerm>('http://localhost:5000/api/featured-term');
      setFeaturedTerm(response.data);
    } catch (error) {
      console.error('Error fetching featured term:', error);
    }
  };

  // Extract unique categories from all terms
  const categories = Array.from(new Set(terms.map(term => term.category)));
  // Predefined difficulty levels
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  // Filter terms based on search input, selected category, and difficulty
  const filteredTerms = terms.filter(term =>
    term.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || term.category === selectedCategory) &&
    (selectedDifficulty === '' || term.difficulty === selectedDifficulty)
  );

  return (
    <div className="App">
      <div className="content-container">
        <h1>Financial Jargon Dictionary</h1>
        
        {/* Search and filter section */}
        <div className="search-filter-container">
          {/* Search input */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a term..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category and difficulty filters */}
          <div className="filters">
            <div className="filter">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="filter">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="">All Difficulties</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured term section */}
        {featuredTerm && (
          <div className="featured-term">
            <h2>Featured Financial Term</h2>
            <h3>{featuredTerm.name}</h3>
            <p className="pronunciation">[{featuredTerm.pronunciation}]</p>
            <p>{featuredTerm.explanation}</p>
            <div className="example">
              <h4>Example:</h4>
              <p>{featuredTerm.example}</p>
            </div>
            <span className="category-tag">{featuredTerm.category}</span>
            <span className="difficulty-tag">{featuredTerm.difficulty}</span>
          </div>
        )}

        {/* List of filtered terms */}
        <div className="terms-list">
          {filteredTerms.map(term => (
            <div key={term.id} className="term-item">
              <h2>{term.name}</h2>
              <p className="pronunciation">[{term.pronunciation}]</p>
              <p>{term.explanation}</p>
              <div className="example">
                <h4>Example:</h4>
                <p>{term.example}</p>
              </div>
              <span className="category-tag">{term.category}</span>
              <span className="difficulty-tag">{term.difficulty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;