import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as BooksAPI from '../../BooksAPI'
import '../../App.css'
import Book from '../../components/Book'
import NavBar from '../../components/NavBar'
import Button from '../../components/Button'
import BookShelf from '../../components/BookShelf'
import { shelfs } from '../../utils/constants'
import { actions } from '../../actions/books'

class BooksApp extends React.Component {
  componentDidMount = () => {
    const { updateMyBooks } = this.props
    BooksAPI.getAll().then(response => updateMyBooks(response))
  }

  onChange = (event) => {
    const { title, shelf } = event
    const { myBooks, updateMyBooks } = this.props
    const book = this.getBookByTitle(title)
    const updatedBookList = this.deleteBookById(myBooks, book.id)
    book.shelf = shelf
    updateMyBooks([...updatedBookList, book])
  }

  getBookByTitle = (title) => {
    const { myBooks } = this.props
    const book = myBooks.filter(item => item.title === title)
    return book[0]
  }

  deleteBookById = (books, id) => (
    books.filter(item => item.id !== id)
  )

  filterBooksByShelf = (books, shelf) => books.filter(book => book.shelf === shelf)

  renderBooks = () => {
    const { myBooks } = this.props
    const onChange = event => this.onChange(event)
    return shelfs.map(shelf => (
      <BookShelf key={shelf.id} title={shelf.label}>
        {this.filterBooksByShelf(myBooks, shelf.type).map(book => (
          <Book
            key={book.id}
            title={book.title}
            authors={book.authors}
            thumbnail={book.imageLinks.thumbnail}
            onChange={onChange}
          />
        ))}
      </BookShelf>))
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
    )
  }
}

const mapStateToProps = reducer => ({ ...reducer })

const mapDispatchToProps = dispatch => ({
  updateMyBooks: books => dispatch(actions.updateMyBooks(books)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp)
