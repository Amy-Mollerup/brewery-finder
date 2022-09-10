import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import UserBeerList from '../BeerListComponent/UserBeerList'

export default function UserBeerListPage() {
  return (
    <div>
    <Header />
    <div
    className=""
    fluid="lg"
  >
    
  </div>
  <div
    className=""
    fluid="xl"
  >
   <UserBeerList />
  </div>
    <Footer/>
    </div>
  )
}
