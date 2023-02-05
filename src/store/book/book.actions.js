import { bookService } from '../../services/book.service'
import { store } from '../store'

export async function loadBooks(filterBy) {
    try {
        const books = await bookService.query(filterBy)
        store.dispatch({ type: 'SET_BOOKS', books })
    } catch (err) {
        console.log('BookActions: Had issues loading books', err)
        throw err
    }
}

export async function updateBook(book) {
    try {
        await bookService.save(book)
        store.dispatch({ type: 'UPDATE_BOOK', book })
    } catch (err) {
        throw err
    }
}

export function setSort(sortBy) {
    store.dispatch({ type: 'SET_SORT', sortBy })
}
