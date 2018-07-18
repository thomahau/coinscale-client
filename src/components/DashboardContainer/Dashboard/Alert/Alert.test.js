import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('<Alert />', () => {
  it('Renders without crashing', () => {
    shallow(<Alert />);
  });

  it('Renders an error message alert', () => {
    const error = 'dummy error message';
    const wrapper = shallow(<Alert type="error">{error}</Alert>);
    expect(wrapper.contains(<div className="alert alert-error">{error}</div>)).toEqual(true);
  });

  it('Renders a success message alert with a close button', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Alert type="success" onClick={callback} />);
    expect(wrapper.hasClass('alert-success')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });
});
