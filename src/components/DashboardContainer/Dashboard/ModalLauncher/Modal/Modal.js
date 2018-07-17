import React from 'react';
import isNil from 'lodash/fp/isNil';
import './Modal.css';

// Reusable modal
export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(event) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        event.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }
    };

    if (keys[event.keyCode]) {
      keys[event.keyCode]();
    }
  }

  handleOutsideClick(event) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(event.target)) {
        onCloseRequest();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  render() {
    const { onCloseRequest, title, children } = this.props;

    return (
      <div className="modal-overlay">
        <div className="modal" ref={node => (this.modal = node)}>
          <div className="modal-header">
            <h3>{title}</h3>
            <button className="closer u-pull-right" aria-label="close" onClick={onCloseRequest}>
              x
            </button>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}
