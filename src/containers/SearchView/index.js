import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import { debounce } from 'lodash';
import Book from '../../components/Book';
import { actions } from '../../actions/books';


class SearchView extends Component {
  state = {
    query: '',
  }
  getQuery = (event) => {
    this.setState({
      query: event.trim(),
    }, () => {
      const { query } = this.state;
      return this.getBooksByQuery(query);
    });
  };

  getBooksByQuery = (query) => {
    const { updateBooks, setBooksError, setBooksLoading } = this.props;
    BooksAPI.search(query).then((response) => {
      if (response && response.length > 0) {
        setBooksError(false);
        updateBooks(response);
        setBooksLoading(false);
      } else {
        setBooksError(true);
        updateBooks(response);
        setBooksLoading(false);
      }
    });
  }

  renderBooks = books => books.length > 0 && books.map(book => (
    <Book
      key={book.id}
      title={book.title}
      authors={book.authors}
      thumbnail={book.imageLinks && book.imageLinks.thumbnail}
      onChange={() => console.log('select', book.title)}
    />
  ));

  render() {
    const { books, error, loading } = this.props;
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
            {!error && books && this.renderBooks(books)}
            {error && <p>Não encontramos resultados para esta pesquisa</p>}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reducer => ({ ...reducer });

const mapDispatchToProps = dispatch => ({
  updateBooks: books => dispatch(actions.updateBooks(books)),
  setBooksError: error => dispatch(actions.setBooksError(error)),
  setBooksLoading: loading => dispatch(actions.setBooksLoading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);

