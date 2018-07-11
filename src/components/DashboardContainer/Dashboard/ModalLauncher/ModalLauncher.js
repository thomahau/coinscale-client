import React from 'react';
import Modal from './Modal/Modal';
import './ModalLauncher.css';

export default class ModalLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { title, children } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <button className="modal-launcher" onClick={() => this.handleToggleModal()}>
          <img src={require('../../../../images/help.png')} alt="Help icon" />
        </button>

        {showModal && (
          <Modal onCloseRequest={() => this.handleToggleModal()} title={title}>
            {children}
          </Modal>
        )}
      </div>
    );
  }
}
