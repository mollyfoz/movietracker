import React from 'react'
import { shallow, mount } from 'enzyme'
import Account from './Account'

describe('Account component', () => {

  let wrapper;

  const props = {
    loginInput: { loggedIn: true }
  }

  beforeEach(() => {
    wrapper = shallow(<Account props={props}/>)
  })

  it.skip('Account should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it.skip('should render a link to sign out if user is signed in', () => {
    const isLoggedIn = true
    expect(wrapper.find('sign-out').length).toEqual(1)
  })

  it.skip('should render a link to log in if user is not signed in', () => {
    const isLoggedIn = false
    expect(wrapper.find('.login').length).toEqual(1)
  })

  it.skip('should fire a function to sign out user on click', () => {
    const mockFn = jest.fn()
    const comp = mount(<Account signOutUser={mockFn}/>)
    const link = comp.find('.sign-out')

      link.simulate('click', {target: { link }});
      expect(mockFn).toBeCalled();
  })

})
