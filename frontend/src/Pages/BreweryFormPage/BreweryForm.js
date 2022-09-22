import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Container } from "reactstrap";
import "./BreweryFormStyle.css";

import BusinessHours from "./BusinessHoursComponent/BusinessHours";
import BrewerInformation from "./BrewerInformationComponent/BrewerInformation";
import FileUploader from "../../Components/FileUploaderComponent/FileUploader";
import BreweryProfileDetail from "../../Components/BreweryProfileDetailComponent/BreweryProfileDetail";
import axios from "axios";

export default function BreweryForm(props) {
  const API_BASE = "http://localhost:8081/breweries/";

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
  });

  const [breweryHours, setBreweryHours] = useState({
    0: ["",""],
    1: ["",""],
    2: ["",""],
    3: ["",""],
    4: ["",""],
    5: ["",""],
    6: ["",""]
  })

  useEffect(() => fetchBreweryData(), []);

  function fetchBreweryData() {
    if (props.breweryId || props.breweryId === 0) {
      axios.get(API_BASE + props.breweryId).then((response) => {
        setBrewerInformation(response.data);
        setBreweryHours(prevHours => {
          return {
            ...prevHours,
            ...response.data.breweryHours
          }
        })
      });
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setBrewerInformation((prevBrewerInfo) => {
      return {
        ...prevBrewerInfo,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleHoursChange = (event) => {

      setBreweryHours(prevHours => {
      let num = 0;
        if(event.target.id - 7 >= 0) {
        num = event.target.id - 7
          return {
            ...prevHours,
            [num]: [prevHours[num][0], event.target.value]
          }
      } else {
        num = event.target.id
      return {
            ...prevHours,
            [num]: [event.target.value, prevHours[num][1]]
          }
      }
    })
      console.log(breweryHours)
    console.log(brewerInformation.breweryHours)
  };

  // function parseData() {
  //   setBrewerInformation((prevInfo) => {
  //     return {
  //       ...prevInfo,
  //       breweryHours: businessHours
  //     };
  //   });
  //   console.log(brewerInformation.breweryHours[0])
  // }

  async function handleSubmit(event) {
    // await parseData();

    if (props.breweryId) {
      event.preventDefault();
      axios
        .put(API_BASE + props.breweryId, {brewerInformation, breweryHours: {...breweryHours}})
        .then((response) => {
          let status = response.status;
          if (status == 200) {
            alert("Saved!");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Could not save brewer information");
        });
    } else {
      event.preventDefault();
      axios
        .post(API_BASE, brewerInformation)
        .then((response) => {
          let status = response.status;
          if (status == 200) {
            alert("Saved!");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Could not save brewer information");
        });
    }
  }

  return (
    <Form className="brewery-form">
      <Row>
        <Col className="BB---ProfileInfo"
          xs={{
            offset: 0,
            size: 2,

          }}

        >
          <BreweryProfileDetail />
        </Col>

        <Col
          md={{
            offset:0,

            size: 5,
          }}


        >
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
            handleChange={handleChange}
          />

        </Col>

        <Col
          md={{
            offset: 0,
            size: 4,
          }}
        >
          <BusinessHours
            breweryHours={breweryHours}
            handleHoursChange={handleHoursChange}
          />
          <FileUploader
            image={brewerInformation.image}
            handleChange={handleChange}
          />

        </Col>

        <Container    fluid>
          <button className="BB---submitBTN" onClick={handleSubmit}>Submit</button>
        </Container>

      </Row>
    </Form>
  );
}
