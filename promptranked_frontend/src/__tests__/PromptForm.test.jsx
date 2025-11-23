import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import axios from 'axios';
import PromptForm from '../components/PromptForm';

// Mock axios
vi.mock('axios');

describe('PromptForm Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders form inputs correctly', () => {
    render(<PromptForm />);

    expect(screen.getByLabelText(/Prompt Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Content/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Prompt/i })).toBeInTheDocument();
  });

  test('shows error when submitting empty form', async () => {
    render(<PromptForm />);

    fireEvent.click(screen.getByRole('button', { name: /Submit Prompt/i }));

    expect(await screen.findByText(/Title and Content are required/i)).toBeInTheDocument();
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('calls API and clears form on successful submission', async () => {
    axios.post.mockResolvedValue({
      data: { id: 1, title: 'Test', content: 'Content', category: 'Cat' }
    });

    const mockOnCreate = vi.fn();
    render(<PromptForm onPromptCreated={mockOnCreate} />);

    fireEvent.change(screen.getByLabelText(/Prompt Title/i), { target: { value: 'Test Title' } });
    fireEvent.change(screen.getByLabelText(/Content/i), { target: { value: 'Test Content' } });

    fireEvent.click(screen.getByRole('button', { name: /Submit Prompt/i }));

    await waitFor(() => {
      // Expecting call to default localhost since no env var is mocked in test environment yet
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/prompts', {
        title: 'Test Title',
        content: 'Test Content',
        category: ''
      });
    });

    // Inputs should be cleared (checking value by display value)
    expect(screen.getByLabelText(/Prompt Title/i).value).toBe('');
    expect(mockOnCreate).toHaveBeenCalled();
  });
});
