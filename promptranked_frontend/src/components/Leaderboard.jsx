import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PromptCard from './PromptCard';

const Leaderboard = ({ refreshTrigger }) => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPrompts = async () => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await axios.get(`${apiUrl}/api/prompts`);
      setPrompts(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching prompts:', err);
      setError('Failed to load leaderboard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrompts();
  }, [refreshTrigger]);

  const handleVoteUpdate = (updatedPrompt) => {
    setPrompts((prevPrompts) => {
      // Update the prompt in the list
      const newPrompts = prevPrompts.map((p) =>
        p.id === updatedPrompt.id ? updatedPrompt : p
      );
      // Re-sort by score
      return newPrompts.sort((a, b) => b.score - a.score);
    });
  };

  if (loading && prompts.length === 0) {
    return <div className="text-center p-4">Loading leaderboard...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center my-6">Leaderboard</h2>
      <div className="flex flex-wrap justify-center">
        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onVote={handleVoteUpdate}
          />
        ))}
        {prompts.length === 0 && (
          <p className="text-gray-500">No prompts yet. Be the first to submit!</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
