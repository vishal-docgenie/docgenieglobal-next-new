import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MobileMenu from '../MobileMenu';

describe('MobileMenu', () => {
  test('renders when open', () => {
    render(
      <BrowserRouter>
        <MobileMenu isOpen={true} />
      </BrowserRouter>
    );
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(
      <BrowserRouter>
        <MobileMenu isOpen={true} onClose={mockOnClose} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByLabelText('Close menu'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
