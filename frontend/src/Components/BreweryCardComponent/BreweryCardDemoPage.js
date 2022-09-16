import React from 'react'
import {Row} from 'reactstrap'
import BreweryCardComponent from './BreweryCardComponent'
import "./BreweryCardStyle.css"

export default function BreweryCardDemoPage() {
  return (
    
    <Row className="BreweryCard--DemoPage" sm="4" fluid="md">
       <BreweryCardComponent />
       <span> </span>
    </Row>


   
  )
}
