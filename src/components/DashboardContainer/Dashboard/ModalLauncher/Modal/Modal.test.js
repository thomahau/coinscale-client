import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
  it('Renders without crashing', () => {
    shallow(<Modal />);
  });

  it('Renders the title and modal content', () => {
    const title = 'Foo';
    const children = 'Bar';
    const wrapper = shallow(<Modal title={title}>{children}</Modal>);
    expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
    expect(wrapper.contains(<div className="modal-content">{children}</div>)).toEqual(true);
  });

  it('Should fire the onCloseRequest callback when close button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Modal onCloseRequest={callback} />);
    wrapper.find('button').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Should fire the onCloseRequest callback when Escape key is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Modal onCloseRequest={callback} />);
    const mockedEvent = { keyCode: 27, preventDefault: jest.fn() };
    wrapper.instance().handleKeyUp(mockedEvent);
    expect(callback).toHaveBeenCalled();
  });

  it('Should not fire the onCloseRequest callback when another key is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Modal onCloseRequest={callback} />);
    const mockedEvent = { keyCode: 1, preventDefault: jest.fn() };
    wrapper.instance().handleKeyUp(mockedEvent);
    expect(callback).not.toHaveBeenCalled();
  });
});
