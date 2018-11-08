import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../Select';
import { Author } from './styles';

class Book extends Component {
  renderAuthors = (authors) => {
    authors.map(author => (
      <Author>{author}</Author>
    ));
  };

  renderBooks = () => {
    const { title, authors, thumbnail } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }} />
          <div className="book-shelf-changer">
            <Select />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{this.renderAuthors(authors)}</div>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        {this.renderBooks()}
      </Fragment>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Book;
