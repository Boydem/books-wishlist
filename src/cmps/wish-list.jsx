import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { WishPreview } from './wish-preview.jsx'

export function WishList() {
    const books = useSelector(storeState => storeState.bookModule.books)
    const [booksToDisplay, setBooksToDisplay] = useState(null)
    useEffect(() => {
        setBooksToDisplay(books.filter(book => book.isInWishlist))
    }, [books])
    console.log('booksToDisplay', booksToDisplay)
    return (
        <section className='wish-list'>
            {!booksToDisplay || !booksToDisplay.length ? (
                <div>No books in wishlist</div>
            ) : (
                <div className='wishlist-list'>
                    {booksToDisplay.map(book => (
                        <article className='wishlist-item' key={book.id}>
                            <p>{book.title}</p>
                            <div>X</div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    )
}
