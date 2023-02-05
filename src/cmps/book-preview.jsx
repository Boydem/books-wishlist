import { NiceCheckbox } from './nice-checkbox'

export function BookPreview({ styles = 0, book, onToggleWishlist }) {
    console.log(book.isInWishlist)
    if (!book) return <div>Loading...</div>
    return (
        <article style={{ left: styles }} className='book-preview'>
            <div className='details'>
                <div className='title-checkbox-container'>
                    <span className='inline-clamp title'>{book.title}</span>
                    <NiceCheckbox
                        book={book}
                        name={'isInWishlist'}
                        value={book.isInWishlist}
                        handleChange={onToggleWishlist}
                    />
                </div>
                <div className='inline-clamp author'>{book.author}</div>
                <div className='line-clamp-5 description'>{book.description}</div>
                <div className='rating'>{book.rating}</div>
                <p className='price'>
                    <span className='prefix'>Price:</span> ${book.price}
                </p>
            </div>
        </article>
    )
}
