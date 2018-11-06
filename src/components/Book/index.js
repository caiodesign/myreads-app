import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../Select';

class ListBooks extends Component {
  renderBooks = () => {
    const { title, author, thumbnail } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }} />
          <div className="book-shelf-changer">
            <Select />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderBooks()}
      </Fragment>
    );
  }
}

ListBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ListBooks;
