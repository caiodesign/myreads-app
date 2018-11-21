import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import { debounce } from 'lodash';
import Book from '../../components/Book';


class SearchView extends Component {
  state = {
    books: [],
    query: '',
  };

  getQuery = (event) => {
    this.setState({
      query: event.trim(),
    }, () => {
      const { query } = this.state;
      if (query) return this.getBooksByQuery(query);
      return this.setState({ books: [], query: '' });
    });
  };

  getBooksByQuery = (query) => {
    BooksAPI.search(query).then((response) => {
      this.setState({
        books: response,
      });
    });
  }

  renderBooks = books => books.map(book => (
    <Book
      key={book.id}
      title={book.title}
      authors={book.authors}
      thumbnail={book.imageLinks && book.imageLinks.thumbnail}
      onChange={() => console.log('select', book.title)}
    />
  ));

  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              name="search"
              onChange={event => this.getQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books && this.renderBooks(books)}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchView;
