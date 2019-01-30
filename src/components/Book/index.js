import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Author, BookCover } from './styles'

class Book extends Component {
  onChange = (event, title) => {
    const { onChange } = this.props
    const shelf = event.target.value
    const bookProps = { shelf, title }
    onChange(bookProps)
  }

  renderSelect = shelf => (
    <select defaultValue={shelf || 'none'} >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )

  renderAuthors = authors => (
    authors.map(author => (
      <Author key={author}>{author}</Author>
    ))
  )

  renderBooks = () => {
    const { title, authors, thumbnail, shelf } = this.props
    const onChange = event => this.onChange(event, title)
    return (
      <div className="book" onChange={onChange && onChange}>
        <div className="book-top">
          <BookCover bg={thumbnail && thumbnail} />
          <div className="book-shelf-changer">
            {this.renderSelect(shelf)}
          </div>
        </div>
        <div className="book-title">{title && title}</div>
        <div className="book-authors">{authors && this.renderAuthors(authors)}</div>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderBooks()}
      </Fragment>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  thumbnail: PropTypes.string,
  onChange: PropTypes.func,
}

export default Book
