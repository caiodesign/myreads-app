import React, { Fragment } from 'react';
// import * as BooksAPI from './BooksAPI'
import '../../App.css';
import ListBooks from '../../components/ListBooks';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  toggleSearch = () => {
    const { showSearchPage } = this.state;
    this.setState({
      showSearchPage: !showSearchPage,
    });
  }

  render() {
    return (
      <div className="app">
        <Fragment>
          <NavBar />
          <ListBooks>
            Hello World
          </ListBooks>
          <Button path="/search" />
        </Fragment>
      </div>
    );
  }
}

export default BooksApp;
