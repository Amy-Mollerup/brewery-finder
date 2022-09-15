import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import UserBeerList from './UserBeerListComponent/UserBeerList'

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
