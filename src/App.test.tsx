import { render, screen } from '@testing-library/react';
import App from './components/App';

describe('App component', () => {
  test('sub components', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app');
    expect(linkElement).toBeInTheDocument();
  });
})