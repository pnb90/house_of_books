import React from 'react';
import { shallow } from '../../enzyme';
import Dialog from '../Dialog';

// Tests I want to write: Dialog receives props, Dialog accurately displays props, simulate onClick on button, onClose is triggered, Even more info opens a new tab?, 


describe('Dialog component', () => {
  let wrapper

  beforeEach(() => {
     wrapper = shallow(<Dialog />)
  })

  it('renders as expected', () => {
     expect(wrapper).toMatchSnapshot()
   });
});
