import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loadBooks, updateBook } from '../store/book/book.actions'
import { BookSlider } from '../cmps/book-slider'
import { WishList } from '../cmps/wish-list'
import { bookService } from '../services/book.service'

export function BookWishlist() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const books = useSelector(storeState => storeState.bookModule.books)
    const [leftPixelsToMove, setLeftPixelsToMove] = useState(0)
    const elSlider = useRef(null)
    const currBookIdx = useRef(0)

    useEffect(() => {
        loadBooks()
    }, [])

    function onAddToWishlist() {
        console.log('Todo:add to wishlist')
    }

    async function onToggleWishlist(book) {
        try {
            if (book.isInWishlist) {
                book.isInWishlist = !book.isInWishlist
            } else {
                book.isInWishlist = true
            }
            await updateBook(book)
        } catch (err) {
            console.log('err', err)
        }
    }

    function onBookChange(dir) {
        if ((currBookIdx.current <= 0 && dir === -1) || (currBookIdx.current >= books.length - 1 && dir === 1)) return
        currBookIdx.current += dir
        const sliderWidth = elSlider.current.offsetWidth
        const updatedLeftPixelsToMove = leftPixelsToMove + sliderWidth * dir
        setLeftPixelsToMove(updatedLeftPixelsToMove)
    }

    if (!books || !books.length) return <div>Loading...</div>
    return (
        <section className='book-wishlist-index'>
            <BookSlider
                ref={elSlider}
                books={books}
                onBookChange={onBookChange}
                onToggleWishlist={onToggleWishlist}
                onAddToWishlist={onAddToWishlist}
                styles={-leftPixelsToMove}
            />
            <WishList />
        </section>
    )
}
