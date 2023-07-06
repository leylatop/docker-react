import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('test 1+1=2', () => {
  const calc = (a, b) => a + b
  expect(calc(1, 1)).toBe(2)
})