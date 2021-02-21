import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../../screens/Home';

describe('Home Screen', () => {
  it('should be able to render title message', () => {
    const { getByText, debug } = render(<Home />);

    const messageElement = getByText('Weather App');

    expect(messageElement).toBeTruthy();
  });
});
