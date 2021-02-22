import React from 'react';
import { render } from '@testing-library/react-native';

import Home from '../../screens/Home';

describe('Home Screen', () => {
  it('should be able to render title message', () => {
    const { getByTestId, debug } = render(<Home />);

    debug();

    const homeComponent = getByTestId('home-screen');

    expect(homeComponent).toBeTruthy();
  });
});
