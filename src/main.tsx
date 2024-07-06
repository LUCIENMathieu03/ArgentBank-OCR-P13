import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Error from './pages/ErrorPage/index.tsx'
import SignIn from './pages/SignIn/index.tsx'
import User from './pages/User/index.tsx'
import Layout from './components/Layouts.tsx'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/User" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>
)
