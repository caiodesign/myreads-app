import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListBooks extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="list-books-content">
        <div>
          { children }
        </div>
      </div>
    );
  }
}

ListBooks.propTypes = {
  children: PropTypes.string,
};

export default ListBooks;
