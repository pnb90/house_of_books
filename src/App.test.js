import React from 'react';
import App from './App';
import { render } from '@testing-library/react'


it('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot()
});
