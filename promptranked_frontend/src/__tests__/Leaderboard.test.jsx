import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import Leaderboard from '../components/Leaderboard';

// Mock axios
vi.mock('axios');

const dummyPrompts = [
  { id: 1, title: 'First', content: 'Content 1', score: 10, category: 'A' },
  { id: 2, title: 'Second', content: 'Content 2', score: 5, category: 'B' }
];

describe('Leaderboard Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders loading state initially', () => {
    // Mock a promise that doesn't resolve immediately to verify loading state
    axios.get.mockImplementation(() => new Promise(() => {}));
    render(<Leaderboard />);
    expect(screen.getByText(/Loading leaderboard/i)).toBeInTheDocument();
  });

  test('renders prompts after fetch', async () => {
    axios.get.mockResolvedValue({ data: dummyPrompts });

    render(<Leaderboard />);

    await waitFor(() => {
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
    });

    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });

  test('shows error message on API failure', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    render(<Leaderboard />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to load leaderboard/i)).toBeInTheDocument();
    });
  });
});
