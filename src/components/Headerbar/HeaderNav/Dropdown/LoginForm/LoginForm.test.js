import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<LoginForm handleSubmit={handleSubmit} />);
  });

  it('Renders the login-form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    expect(wrapper.find('form').hasClass('login-form')).toBe(true);
  });

  it('Renders error feedback when there is an error', () => {
    const handleSubmit = jest.fn();
    const error = 'mockError';
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.contains(<div className="form-error" aria-live="polite">
      {error}
                            </div>)).toEqual(true);
  });

  it('Dispatches login action when form is submitted', () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} dispatch={dispatch} />);
    const instance = wrapper.instance();
    const values = { username: 'foo', password: 'bar' };
    instance.onSubmit(values);
    expect(dispatch).toHaveBeenCalled();
  });
});
