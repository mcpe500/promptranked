import React, { useState } from 'react';
import PromptForm from './components/PromptForm';
import Leaderboard from './components/Leaderboard';
import './App.css'

function App() {
  const [refreshLeaderboard, setRefreshLeaderboard] = useState(0);

  const handlePromptCreated = () => {
    // Trigger leaderboard refresh
    setRefreshLeaderboard(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">PromptRanked</h1>
          <p className="text-lg text-gray-600">Discover and rank the best AI prompts!</p>
        </header>

        <div className="max-w-2xl mx-auto mb-10">
          <PromptForm onPromptCreated={handlePromptCreated} />
        </div>

        <div className="border-t border-gray-300 pt-10">
          <Leaderboard refreshTrigger={refreshLeaderboard} />
        </div>
      </div>
    </div>
  );
}

export default App;
