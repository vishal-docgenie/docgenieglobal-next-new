import React from 'react';
import { render } from '@testing-library/react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if the logo is rendered
    const logoElement = screen.getByAltText('DocGenie Global Logo');
    expect(logoElement).toBeInTheDocument();

    // Check if navigation links are rendered
    const solutionsLink = screen.getByText('Solutions');
    expect(solutionsLink).toBeInTheDocument();

    const pricingLink = screen.getByText('Pricing');
    expect(pricingLink).toBeInTheDocument();

    const blogsLink = screen.getByText('Blogs');
    expect(blogsLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });

  test('renders the mobile menu toggle button', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if the mobile menu toggle button is rendered
    const mobileMenuButton = screen.getByRole('button', { name: 'Open menu' });
    expect(mobileMenuButton).toBeInTheDocument();
  });

  test('opens the mobile menu when the toggle button is clicked', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Get the mobile menu toggle button
    const mobileMenuButton = screen.getByRole('button', { name: 'Open menu' });

    // Click the mobile menu toggle button
    fireEvent.click(mobileMenuButton);

    // Wait for the mobile menu to open
    await waitFor(() => {
      const mobileMenu = screen.getByRole('dialog', { name: 'Mobile Navigation' });
      expect(mobileMenu).toBeInTheDocument();
    });
  });
});
