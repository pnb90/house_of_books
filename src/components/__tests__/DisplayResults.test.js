import React from 'react';
import { shallow } from '../../enzyme';
import DisplayResults from '../DisplayResults';

// Tests I want to write: receives props, passes props accurately to Card, tests for edge case where there are no results
describe('DisplayResults component', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<DisplayResults />)
  })

  it('renders as expected', () => {
     expect(wrapper).toMatchSnapshot()
   });
});

