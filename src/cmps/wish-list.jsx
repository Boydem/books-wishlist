import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { updateBook } from '../store/book/book.actions'

export function WishList() {
    const books = useSelector(storeState => storeState.bookModule.books)
    const [booksToDisplay, setBooksToDisplay] = useState(null)

    useEffect(() => {
        setBooksToDisplay(books.filter(book => book.isInWishlist))
    }, [books])

    async function onToggleWishlist(book) {
        try {
            book.isInWishlist = false
            await updateBook(book)
        } catch (err) {
            console.log('err', err)
        }
    }

    function getTotalAmount() {
        let total = 0
        booksToDisplay.forEach(book => {
            total += +book.price
        })
        return parseInt(total).toFixed(2)
    }

    return (
        <section className='wish-list'>
            {!booksToDisplay || !booksToDisplay.length ? (
                <div>No books in wishlist</div>
            ) : (
                <div className='wishlist-list'>
                    {booksToDisplay.map((book, idx) => (
                        <article className='wishlist-item' key={idx}>
                            <p>{book.title}</p>
                            <div onClick={() => onToggleWishlist(book)}>X</div>
                        </article>
                    ))}
                    <div className='total'>Total: ${getTotalAmount()}</div>
                </div>
            )}
        </section>
    )
}
