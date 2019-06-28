import React from 'react';
import { mount, shallow, render } from '../enzyme';
import { create } from "react-test-renderer";
import Searchbar from '../components/Searchbar';

describe('Basic test', () => {
  it('basic test', () => {
    expect(2+2).toBe(4)
  })
})

describe('Searchbar', () => {
  it('renders', () => {
    const wrapper = mount(<Searchbar />)
    expect(wrapper).toBeTruthy()
  })
})

describe('Searchbar defaults', () => {
  it('has these defaults', () => {
    const wrapper = mount(<Searchbar />)
    console.log(wrapper.find("Input"))
    expect(wrapper.find("Input"))
  })
})

describe('Searchbar Props', () => {
  it('should do something', () => {
    expect(2+4).toEqual(6)
  })

  it('accept a function as props', () => {
    const wrapper = shallow(
        <Searchbar
          aria-label= "book searchbar"
        />
    )
  })
})