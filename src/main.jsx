import { createContext, StrictMode, useContext } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from '../Layout.jsx'
import { HomePage } from '../Components/HomePage/index.jsx'
import ContactPage from '../Components/ContactPage/index.jsx'
import AboutPage from '../Components/AboutPage/index.jsx'
import BlogPage from '../Components/BlogPage/index.jsx'
import FeaturePage from '../Components/FeaturePage/index.jsx'
import StorePage from '../Components/StorePage/index.jsx'
import SignInPage from '../Components/SignInPage/index.jsx'
import { SignUpPage } from '../Components/SignUpPage/index.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="layout" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="feature" element={<FeaturePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </>,
  ),
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
