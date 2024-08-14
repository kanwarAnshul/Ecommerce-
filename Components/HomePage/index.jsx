import React from 'react'
import HeaderMegaMenu from '../Header'
import MainCrousel from './Crousel'
import Collections from './Collections'
import ProductOverview from './ProductOverview'
import Footer from '../Footer'

export const HomePage = () => {
  return (
    <>
      <MainCrousel />
      <Collections />
      <ProductOverview />
    </>
  )
}
