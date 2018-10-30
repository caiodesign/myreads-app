import React, { Fragment } from 'react';
import * as BooksAPI from '../../BooksAPI';
import '../../App.css';
import ListBooks from '../../components/ListBooks';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentWillMount = () => {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Fragment>
          <NavBar />
          <ListBooks books={books} />
          <Button path="/search" />
        </Fragment>
      </div>
    );
  }
}

export default BooksApp;
