import React from 'react';
import { shallow } from '../../enzyme';
import Home from '../../views/Home';


describe('Homepage component', () => {
   let wrapper

   beforeEach(() => {
      wrapper = shallow(<Home />)
   })

   it('renders as expected', () => {
      expect(wrapper).toMatchSnapshot()
    });
});
