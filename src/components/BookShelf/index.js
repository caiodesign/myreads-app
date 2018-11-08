import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {children}
            </ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default BookShelf;
