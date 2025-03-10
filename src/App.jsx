import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Feature from './sections/Feature'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Download from './sections/Download'
import Footer from './sections/Footer'
const App = () => {
  return (
   <main className='overflow-hidden'>
   <Header></Header>
   <Hero></Hero>
   <Feature></Feature>
   <Pricing></Pricing>
   <Faq></Faq>
   <Testimonials></Testimonials>
   <Download></Download>
   <Footer></Footer>
   </main>
  )
}

export default App
