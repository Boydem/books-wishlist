import './assets/styles/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { BookWishlist } from './pages/book-wishlist'

export function App() {
    return (
        <div className='app'>
            <main className='main-layout'>
                <Routes>
                    <Route path='/' element={<BookWishlist />} />
                </Routes>
            </main>
        </div>
    )
}
