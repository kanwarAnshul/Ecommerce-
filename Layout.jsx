import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderMegaMenu from './Components/Header'
import Footer from './Components/Footer'

const Layout = () => {
  return (
    <>
      <HeaderMegaMenu />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
