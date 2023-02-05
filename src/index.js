// import { Router } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './root-cmp'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
)
