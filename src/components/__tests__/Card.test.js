import React from 'react';
import { shallow } from '../../enzyme';
import Card from '../Card';

describe('Card component', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<Card />)
  })

  it('renders as expected', () => {
     expect(wrapper).toMatchSnapshot()
   });
});
