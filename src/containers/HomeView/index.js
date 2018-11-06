import React, { Fragment } from 'react';
import * as BooksAPI from '../../BooksAPI';
import '../../App.css';
import Book from '../../components/ListBooks';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import BookShelf from '../../components/BookShelf';


class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentWillMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  render() {
    const { books } = this.state;
    console.log(books);
    return (
      <div className="app">
        <Fragment>
          <NavBar />
          <BookShelf title="Reading">
            <Book />
          </BookShelf>
          <Button path="/search" />
        </Fragment>
      </div>
    );
  }
}

export default BooksApp;
