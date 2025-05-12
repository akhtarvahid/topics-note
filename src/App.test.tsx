import { render, screen } from '@testing-library/react';
import App from './components/App';

describe('App component', () => {
  test('sub components test case', () => {
    render(<App />);
    const linkElement = screen.getByTestId('app');
    expect(linkElement).not.toBeInTheDocument();
  });
})