import { BookPreview } from './book-preview'
import { BsChevronRight } from 'react-icons/bs'
import { BsChevronLeft } from 'react-icons/bs'
import { forwardRef } from 'react'

export const BookSlider = forwardRef((props, ref) => {
    const { styles, books, onToggleWishlist, onBookChange } = props
    console.log('books', books)
    return (
        <div className='book-slider-container'>
            <div onClick={() => onBookChange(-1)} className='arrow-left'>
                <BsChevronLeft />
            </div>
            <section ref={ref} className='book-list'>
                {books.map(book => {
                    return <BookPreview book={book} key={book.id} onToggleWishlist={onToggleWishlist} styles={styles} />
                })}
            </section>
            <div onClick={() => onBookChange(1)} className='arrow-right'>
                <BsChevronRight />
            </div>
        </div>
    )
})
