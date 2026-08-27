import { render, screen } from '@testing-library/react';
import App from './App';

test('renders used cars link', () => {
  render(<App />);
  const linkElement = screen.getByText(/used cars/i);
  expect(linkElement).toBeInTheDocument();
});
