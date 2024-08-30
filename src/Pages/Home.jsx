import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/introPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* Header */}
      <Header />

      {/* search */}
      <Search />

      {/* Intropost */}
      <IntroPost />

      {/* Blogs */}
      <Blogs />

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home
