import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Author, BookCover } from './styles';

class Book extends Component {
  onChange = (event, title) => {
    const { onChange } = this.props;
    const shelf = event.target.value;
    const bookProps = { shelf, title };
    onChange(bookProps);
  }

  renderSelect = () => (
    <select>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );

  renderAuthors = authors => (
    authors.map(author => (
      <Author key={author}>{author}</Author>
    ))
  );

  renderBooks = () => {
    const { title, authors, thumbnail } = this.props;
    const onChange = event => this.onChange(event, title);
    return (
      <div className="book" onChange={onChange}>
        <div className="book-top">
          <BookCover bg={thumbnail} />
          <div className="book-shelf-changer">
            {this.renderSelect()}
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
  onChange: PropTypes.func.isRequired,
};

export default Book;
