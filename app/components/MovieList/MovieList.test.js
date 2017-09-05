import React from 'react'
import { shallow, mount } from 'enzyme'
import MovieList from './MovieList'

describe('MovieList component', () => {

  beforeEach(() => {
    const wrapper = mount(<MovieList />)
  })

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined()
  })

})
