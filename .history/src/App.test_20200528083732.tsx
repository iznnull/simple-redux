import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  const { getByText } = renderer(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
