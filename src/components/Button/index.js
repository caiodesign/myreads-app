import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const { path } = this.props;
    return (
      <Link to={path} className="open-search">
        Add a book
      </Link>
    );
  }
}

Button.propTypes = {
  path: PropTypes.string,
};

export default Button;
