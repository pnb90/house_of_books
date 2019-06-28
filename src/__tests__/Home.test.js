import React from 'react';
import { mount, shallow, render } from '../enzyme';
import Home from '../views/Home';

describe('Renders Home', () => {
   it('renders without crashing', () => {
      shallow(<Home />);
    });
});
