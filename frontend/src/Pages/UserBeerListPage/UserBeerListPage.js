import React from 'react'
import UserBeerList from './UserBeerListComponent/UserBeerList'

export default function UserBeerListPage(props) {
  return (
  <div
    className=""
    fluid="xl"
  >
   <UserBeerList breweryId={props.breweryId}/>
  </div>
    
  )
}
