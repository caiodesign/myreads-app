import React, { Fragment } from 'react';
import * as BooksAPI from '../../BooksAPI';
import '../../App.css';
import Book from '../../components/Book';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import BookShelf from '../../components/BookShelf';
import { shelfs } from '../../utils/constants';

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentWillMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  filterBooksByShelf = (books, shelf) => books.filter(book => book.shelf === shelf);

  renderBooks = () => {
    const { books } = this.state;
    return shelfs.map(shelf => (
      <BookShelf key={shelf.label} title={shelf.label}>
        {this.filterBooksByShelf(books, shelf.type).map(book => (
          <Book
            key={book.title}
            title={book.title}
            authors={book.authors}
            thumbnail={book.imageLinks.thumbnail}
          />
        ))}
      </BookShelf>));
  }

  render() {
    return (
      <div className="app">
        <Fragment>
          <NavBar />
          {this.renderBooks()}
          <Button path="/search" />
        </Fragment>
      </div>
    );
  }
}

export default BooksApp;
