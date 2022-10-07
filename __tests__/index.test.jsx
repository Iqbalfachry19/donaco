import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', {
      name: /Donaco/,
    });

    expect(heading).toBeInTheDocument();
  });
});
