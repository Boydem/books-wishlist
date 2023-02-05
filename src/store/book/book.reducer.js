import { bookService } from '../../services/book.service'

const initialState = {
    books: [],
    sortBy: bookService.getDefaultSort(),
}

export function bookReducer(state = initialState, action) {
    // {type: SOME_TYPE, data}
    let books
    let lastUpdatedBook

    switch (action.type) {
        // Books
        case 'SET_BOOKS':
            return { ...state, books: action.books }
        case 'UPDATE_BOOK':
            lastUpdatedBook = action.book
            books = state.books.map(book => (book.id === action.book.id ? action.book : book))
            return { ...state, books, lastUpdatedBook }
        case 'UNDO_UPDATE_BOOK':
            books = state.books.map(book => (book.id === action.book.id ? state.lastUpdatedBook : book))
            return { ...state, books, lastUpdatedBook: null }
        // Sort
        case 'SET_SORT':
            return { ...state, sortBy: action.sortBy }

        //   Defalut
        default:
            return { ...state }
    }
}
