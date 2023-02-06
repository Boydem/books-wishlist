import './assets/styles/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { BookIndex } from './pages/book-index'
import { WishList } from './cmps/wish-list'

export function App() {
    return (
        <div className='app'>
            <main className='main-layout book-wishlist-index'>
                <Routes>
                    <Route path='/books-wishlist' element={<BookIndex />} />
                </Routes>
                <WishList />
            </main>
        </div>
    )
}
