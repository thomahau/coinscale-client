import React from 'react';
import { shallow } from 'enzyme';
import { HeaderNav } from './HeaderNav';
import { clearAuth } from '../../../actions/auth';

describe('<HeaderNav />', () => {
  it('Renders without crashing', () => {
    shallow(<HeaderNav />);
  });

  it('Renders the dropdown login menu if user is not logged in', () => {
    const wrapper = shallow(<HeaderNav loggedIn={false} />);
    expect(wrapper.find('Dropdown').length).toBe(1);
  });

  it('Renders the username and logout nav items if user is logged in', () => {
    const username = 'foo';
    const wrapper = shallow(<HeaderNav loggedIn username={username} />);
    expect(wrapper.contains(<span>{username}</span>)).toEqual(true);
    expect(wrapper.find('Button').length).toBe(1);
  });

  it('Dispatches clearAuth when logout button is clicked', () => {
    const username = 'foo';
    const dispatch = jest.fn();
    const wrapper = shallow(<HeaderNav loggedIn username={username} dispatch={dispatch} />);
    wrapper.find('Button').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(clearAuth());
  });
});
