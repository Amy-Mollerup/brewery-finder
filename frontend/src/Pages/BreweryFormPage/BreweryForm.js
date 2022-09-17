import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import "./BreweryFormStyle.css";

import BusinessHours from "./BusinessHoursComponent/BusinessHours";
import BrewerInformation from "./BrewerInformationComponent/BrewerInformation";
import FileUploader from "../../Components/FileUploaderComponent/FileUploader"
import BreweryProfileDetail from "../../Components/BreweryProfileDetailComponent/BreweryProfileDetail";
import axios from "axios";

export default function BreweryForm(props) {

  const API_BASE = 'http://localhost:8081/breweries/'

  const [brewerInformation, setBrewerInformation] = useState({
    breweryName: "",
    breweryStreet: "",
    breweryCity: "",
    breweryState: "",
    breweryPostCode: "",
    phoneNumber: "",
    website: "",
    image: "",
    description: "",
    active: false,
    breweryHours: {}
  })


  useEffect(() => fetchBreweryData(), [props.breweryId])

  function fetchBreweryData() {
    if (props.breweryId || props.breweryId === 0){
    axios.get(API_BASE + props.breweryId)
      .then(response => {
        setBrewerInformation(response.data)
      })
    }
  }

  const [breweryHours, setBreweryHours] = useState(new Map())


  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setBrewerInformation(prevBrewerInfo => {
      return {
        ...prevBrewerInfo,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const handleHoursChange = (event) => {
    setBreweryHours(map => new Map(map.set(event.target.id, event.target.value)))
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
    if(props.breweryId || props.breweryId === 0) {
      axios.put(API_BASE + props.breweryId, brewerInformation)
      .then((response) => {
        let status = response.status
        console.log(status)
        if (status == 200) {
          alert("Saved!")
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Could not save brewer information")
      })
    } else {
    axios.post(API_BASE, brewerInformation)
      .then((response) => {
        let status = response.status
        if (status == 200) {
          alert("Saved!")
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Could not save brewer information")
      })
    }
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
            description={brewerInformation.description}
            active={brewerInformation.active}
            handleChange={handleChange} />
        </Col>

        <Col md="5">
          <BusinessHours
            breweryHours={breweryHours}
            handleHoursChange={handleHoursChange}
          />
          <FileUploader image={brewerInformation.image} handleChange={handleChange}/>
          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </>
  );
}
