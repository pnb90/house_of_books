import React from 'react';
import { shallow } from '../../enzyme';
import DisplayResults from '../DisplayResults';


describe('DisplayResults component', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<DisplayResults />)
  })

  it('renders as expected', () => {
     expect(wrapper).toMatchSnapshot()
   });
});

