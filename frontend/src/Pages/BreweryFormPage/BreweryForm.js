import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import "./BreweryFormStyle.css";

import BusinessHours from "./BusinessHoursComponent/BusinessHours";
import BrewerInformation from "./BrewerInformationComponent/BrewerInformation";
import FileUploader from "../../Components/FileUploaderComponent/FileUploader"
import BreweryProfileDetail from "../../Components/BreweryProfileDetailComponent/BreweryProfileDetail";
import axios from "axios";

export default function BreweryForm() {

  const API_Base = 'http://localhost:8081/breweries'

  const [brewerInformation, setBrewerInformation] = useState({
    breweryName: "",
    breweryStreet: "",
    breweryCity: "",
    breweryState: "",
    breweryPostCode: "",
    phoneNumber: "",
    website: "",
    breweryHours: {}
  })


  const [breweryHours, setBreweryHours] = useState(new Map())

  function handleChange(event) {
    setBrewerInformation(prevBrewerInfo => {
      return {
        ...prevBrewerInfo,
        [event.target.name]: event.target.value
      }
    })
    console.log(brewerInformation)
  }

  const handleHoursChange = (event) => {
    setBreweryHours(map => new Map(map.set(event.target.id, event.target.value)))
    console.log(breweryHours)
  }

  function parseData() {
    const newMap = new Map()
    for (let i = 0; i < 7; i++) {
      newMap.set(i, [breweryHours.get(i + " start"), breweryHours.get(i + " end")])
    }

    const obj = Object.fromEntries(newMap)
    setBrewerInformation(prevInfo => {
      return {
        ...prevInfo,
        breweryHours: obj
      }
    })
    console.log(brewerInformation)
  }


  async function handleSubmit() {
    await parseData()
    console.log(brewerInformation)
    axios.post(API_Base, brewerInformation)
      .then((response) => {
        let status = response.status
        if(status === '200') {
          alert("Saved!")
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Could not save brewer information")
      })
  }

  return (
    <>
      <Row xs="3">
        <Col xs="2">
          <BreweryProfileDetail />
        </Col>

        <Col md="4">
          <BrewerInformation
            breweryName={brewerInformation.breweryName}
            breweryStreet={brewerInformation.breweryStreet}
            breweryCity={brewerInformation.breweryCity}
            breweryState={brewerInformation.breweryState}
            breweryPostCode={brewerInformation.breweryPostCode}
            phoneNumber={brewerInformation.phoneNumber}
            website={brewerInformation.website}
            handleChange={handleChange} />
        </Col>

        <Col md="5">
        <BusinessHours
            breweryHours={breweryHours}
            handleHoursChange={handleHoursChange}
          />
          <FileUploader />
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </>
  );
}
