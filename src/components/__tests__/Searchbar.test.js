import React from 'react';
import { mount, shallow } from '../../enzyme';
import Searchbar from '../Searchbar';

describe('Searchbar Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Searchbar />)
  })
  
  it('renders the searchbar component without errors', () => {  
    expect(wrapper).toMatchSnapshot()
  })
  
  it('has an inputbase', () => {
    expect(wrapper.find("InputBase"))
  })

  it('has a form wrapper', () => {
    expect(wrapper.find("form"))
  })
  
})

describe('Searchbar Component', () => {
  let wrapper
  
  beforeEach(() => {
    const searchBookCallback = () => {
      "I'm a function!"
    }
    wrapper = mount(<Searchbar 
      searchBookCallback = { searchBookCallback }
    />)
  })

  it('accepts props', () => {
    // console.log(wrapper.debug())
    console.log(wrapper.find('form'))
    expect(wrapper.find('form').toBeTruthy())
    // expect(wrapper.props().aria-label).toBe("book searchbar")
    // expect(wrapper.props().onChange).toBe({handleSearchTermsChanges})
    // expect(wrapper.props().placeholder).toBe("Search for books")
  })
})


