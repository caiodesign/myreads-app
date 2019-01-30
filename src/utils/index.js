export const getBookByTitle = (books, title) => {
  const book = books.filter(item => item.title === title)
  return book[0]
}

export const deleteBookById = (books, id) => (
  books.filter(item => item.id !== id)
)

export const addStg = (items, stg = 'books') => {
  try {
    return localStorage.setItem(stg, JSON.stringify(items))
  } catch (error) {
    console.log('addStg: ', error)
    return false
  }
}

export const getStg = (stg) => {
  try {
    return JSON.parse(localStorage.getItem(stg))
  } catch (error) {
    console.log('getStg: ', error)
    return false
  }
}
