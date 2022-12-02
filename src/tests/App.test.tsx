import { render, screen } from '@testing-library/react';
import { App } from '../App';
import { renderWithProviders } from './helpers/renderWith';

test('renders learn react link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
