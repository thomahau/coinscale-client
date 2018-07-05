import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from './Navigation';
import { clearAuth } from '../actions/auth';

describe('<Navigation />', () => {
  it('Renders without crashing', () => {
    shallow(<Navigation />);
  });

  it('Renders the dropdown login menu if user is not logged in', () => {
    const wrapper = shallow(<Navigation loggedIn={false} />);
    expect(wrapper.find('DropdownMenu').length).toBe(1);
  });

  it('Renders the username and logout nav items if user is logged in', () => {
    const username = 'foo';
    const wrapper = shallow(<Navigation loggedIn username={username} />);
    expect(wrapper.find('NavItem').length).toBe(2);
    expect(wrapper.find('NavLink').length).toBe(1);
  });

  it('Dispatches clearAuth when logout link is clicked', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    const wrapper = shallow(<Navigation loggedIn username={username} dispatch={dispatch} />);
    wrapper.find('NavLink').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(clearAuth());
  });
});
