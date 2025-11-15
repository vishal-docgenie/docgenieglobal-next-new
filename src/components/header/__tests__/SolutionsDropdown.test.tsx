import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SolutionsDropdown from '../SolutionsDropdown';

describe('SolutionsDropdown', () => {
  test('renders dropdown button', () => {
    render(
      <BrowserRouter>
        <SolutionsDropdown isOpen={false} setIsOpen={() => {}} isCurrentPage={false} />
      </BrowserRouter>
    );
    expect(screen.getByRole('button', { name: 'Solutions' })).toBeInTheDocument();
  });

  test('opens dropdown when clicked', () => {
    const mockSetIsOpen = jest.fn();
    render(
      <BrowserRouter>
        <SolutionsDropdown isOpen={false} setIsOpen={mockSetIsOpen} isCurrentPage={false} />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Solutions' }));
    expect(mockSetIsOpen).toHaveBeenCalled();
  });
});
