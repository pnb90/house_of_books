   import React from 'react';
import { shallow } from '../../enzyme';
import { render, fireEvent, prettyDOM } from '@testing-library/react'
import Card from '../Card';

// Tests I want to write: Card receives props, card accurately displays props, card passes props to dialog

describe('Card component', () => {  
   it("matches snapshot", () => {
    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
   })

   it("receives props properly", () => {
      const { } = render(<Card 
                                       key = "fake data"
                                       externalLink = "fake data"
                                       title = "fake data"
                                       bookCover = "fake data"
                                       publisher = "fake data"
                                       description = "fake data"
                                       authors = "fake data"
                                    />)
   })

//   let wrapper

//   beforeEach(() => {
//      wrapper = shallow(<Card />)
//   })

//   it('renders as expected', () => {
//      expect(wrapper).toMatchSnapshot()
//    })
})
