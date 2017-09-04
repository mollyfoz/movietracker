import React from 'react'
import { shallow, mount } from 'enzyme'
import MovieCard from './MovieCard'

describe('MovieCard component', () => {

  beforeEach(() => {
    const wrapper = shallow(<MovieCard data={data}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a movie card', () => {
    expect(wrapper.find('.movie-cards').length).toEqual(1)
  })

  it('should only render a link to fave if user is not logged in', () => {
    const user = false
    expect(wrapper.find('.button-link').lenght).toEqual(1)
  })

  it('should render a button to fave if user is logged in', () => {
    const user = true
    expect(wrapper.find('button').length).toEqual(1)
  })

})
