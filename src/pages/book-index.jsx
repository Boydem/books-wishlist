import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { loadBooks, updateBook } from '../store/book/book.actions'
import { BookSlider } from '../cmps/book-slider'

export function BookIndex() {
    const books = useSelector(storeState => storeState.bookModule.books)
    const [leftPixelsToMove, setLeftPixelsToMove] = useState(0)
    const elSlider = useRef(null)
    const currBookIdx = useRef(0)

    useEffect(() => {
        loadBooks()
    }, [])

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
        <BookSlider
            ref={elSlider}
            books={books}
            onBookChange={onBookChange}
            onToggleWishlist={onToggleWishlist}
            styles={-leftPixelsToMove}
        />
    )
}
