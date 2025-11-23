import React from 'react';
import axios from 'axios';

const PromptCard = ({ prompt, onVote }) => {
  const handleVote = async (type) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await axios.post(`${apiUrl}/api/prompts/${prompt.id}/vote`, {
        type,
      });

      if (onVote) {
        onVote(response.data);
      }
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 border border-gray-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{prompt.title}</div>
        {prompt.category && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {prompt.category}
          </span>
        )}
        <p className="text-gray-700 text-base">
          {prompt.content}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between bg-gray-50">
        <div className="text-sm text-gray-600">
          Score: <span className="font-bold text-lg">{prompt.score}</span>
        </div>
        <div>
          <button
            onClick={() => handleVote('up')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2 text-sm"
            aria-label="upvote"
          >
            ▲ Up
          </button>
          <button
            onClick={() => handleVote('down')}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
            aria-label="downvote"
          >
            ▼ Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
