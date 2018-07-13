import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ViewOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: !!props.highlighted
    };
  }

  handleToggleHighlight() {
    this.setState({ highlighted: !this.state.highlighted });
  }

  render() {
    const { destination } = this.props;
    const className = `view-option${this.state.highlighted ? ' highlighted' : ''}`;

    return (
      <div className={className}>
        <NavLink to={`/dashboard/${destination}`} activeClassName="active">
          {destination}
        </NavLink>
      </div>
    );
  }
}
