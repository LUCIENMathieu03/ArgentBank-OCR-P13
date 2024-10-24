import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store.ts'
import Home from './pages/Home/index.tsx'
import Error from './pages/ErrorPage/index.tsx'
import Login from './pages/Login/index.tsx'
import Profile from './pages/Profile/index.tsx'
import Layout from './components/Layouts.tsx'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </Layout>
                </PersistGate>
            </Provider>
        </Router>
    </React.StrictMode>
)
