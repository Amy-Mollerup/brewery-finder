import React, { useState, useEffect } from "react";
import { Row, Col, Form, Container } from "reactstrap";
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
    active: true,
    brewer: props.brewer,
    breweryHours: {
    0: ["",""],
    1: ["",""],
    2: ["",""],
    3: ["",""],
    4: ["",""],
    5: ["",""],
    6: ["",""]
    }
  });

  useEffect(() => {
    function fetchBreweryData() {
      if (props.breweryId) {
        axios.get(API_BASE + props.breweryId).then((response) => {
          if(response.data.breweryHours[0] !== undefined){
            console.log('theres data')
            setBrewerInformation(response.data);
          }
          else{
            console.log('womp womp')
            setBrewerInformation({
            breweryId: response.data.breweryId,
            breweryName: response.data.breweryName,
            breweryStreet: response.data.breweryStreet,
            breweryCity: response.data.breweryCity,
            breweryState: response.data.breweryState,
            breweryPostCode: response.data.breweryPostCode,
            phoneNumber: response.data.phoneNumber,
            website: response.data.website,
            image: response.data.image,
            description: response.data.description,
            active: response.data.active,
            brewer: response.data.brewer,
            breweryHours: {
            0: ["",""],
            1: ["",""],
            2: ["",""],
            3: ["",""],
            4: ["",""],
            5: ["",""],
            6: ["",""]
            }})
        
        }
          
        });
      }
    }
    fetchBreweryData()
  }, [props.breweryId]);

  

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
    console.log(brewerInformation);

      setBrewerInformation(prev => {
      let num = 0;
        if(event.target.id - 7 >= 0) {
        num = event.target.id - 7
          return {
            ...prev,
            breweryHours:{...prev.breweryHours,
              [num]: [prev.breweryHours[num][0], event.target.value]}
          }
      } else {
        num = event.target.id
      return {
            ...prev,
            breweryHours:{...prev.breweryHours,
              [num]: [event.target.value, prev.breweryHours[num][1]]}
          }
      }
    })
  };


  async function handleSubmit(event) {

    if (props.breweryId) {
      event.preventDefault();
      console.log(JSON.stringify(brewerInformation))
      axios
        .put(API_BASE + props.breweryId, brewerInformation)
        .then((response) => {
          let status = response.status;
          if (status === 200) {
            alert("Saved!");
          }
          props.navigate('/brewerDash');
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
          if (status === 200) {
            alert("Saved!");
            props.navigate('/brewerDash');
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
            breweryHours={brewerInformation.breweryHours}
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
