import React from 'react';
import { shallow } from '../../enzyme';
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import Home from '../../views/Home';

// Tests I want to write: axios call works, receives props from searchbar, containers searchbar and displayresults components, passes information to both accurately. 
describe('Homepage component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("receives props properly", () => {
      const { } = render(<Home />)
   })
});
