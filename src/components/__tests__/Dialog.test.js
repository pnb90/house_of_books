import React from 'react';
import { shallow } from '../../enzyme';
import Dialog from '../Dialog';

describe('Dialog component', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<Dialog />)
  })

  it('renders as expected', () => {
     expect(wrapper).toMatchSnapshot()
   });
});
