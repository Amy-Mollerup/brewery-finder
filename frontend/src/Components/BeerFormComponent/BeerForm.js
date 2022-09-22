import axios from "axios";
import React from "react";
import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import "./BeerForm.css";
import { useEffect } from "react";
import FileUploader from "../FileUploaderComponent/FileUploader";
import BeerListCard from "../BeerListComponent/BeerListModalComponent/BeerListCard";
import { Link } from "react-router-dom";

export default function BeerForm(props) {
  const [formData, setFormData] = React.useState({
    beerId: "",
    beerName: "",
    beerDescription: "",
    beerABV: "",
    beerType: "",
    beerImage: "",
    breweryId: props.breweryId,
  });

  const API_BASE = "http://localhost:8081/beer/";

  const [breweryName, setBreweryName] = React.useState("");

  useEffect(() => fetchBeerData(), []);
  useEffect(() => getBrewery(), []);
  
  function fetchBeerData() {
    if (props.beerId) {
      axios.get(API_BASE + props.beerId).then((response) => {
        setFormData(response.data);
      });
    }
  }

  function getBrewery() {
    const url = "http://localhost:8081/breweries/" + props.breweryId;
    axios.get(url).then((resp) => {
      setBreweryName(resp.data.breweryName);
    });
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.beerId) {
      axios.put(API_BASE + props.beerId, formData).then((resp) => {
        if (resp.status === 200) {
          alert("Beer edited!");
          window.location.reload();
        }
      });
    } else {
      axios.post(API_BASE, formData).then((resp) => {
        if (resp.status === 200) {
          alert("Beer created!");
          window.location.reload();
        }
      });
    }
  }

  return (
    <>

<Row>
    <Col
      className="col col-md-7">
          <Col md="5">
            <Form className="beerInfo--container" onSubmit={handleSubmit}>
              <Col>
                <img
                  src={require("../assets/cheers-DashPic.png")}
                  alt="Avatar"
                />{" "}
                <span> Beer Details </span>
              </Col>
              <Row>
                <Col>
                  <Label for="breweryName">Brewery</Label>
                  <Input
                    id="breweryName"
                    name="breweryName"
                    value={breweryName}
                    type="text"
                    className="form-control-beerInfo"
                    readOnly
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="brewerName">Beer Name</Label>
                    <Input
                      id="brewerId"
                      name="beerName"
                      placeholder="Cool Beer Name"
                      value={formData.beerName}
                      onChange={handleChange}
                      type="text"
                      autoComplete="off"
                      className="form-control-beerInfo"
                      required
                    />
                  </FormGroup>
                </Col>

                <FormGroup>
                  <Label for="exampleText">Beer Description</Label>
                  <Input
                    id="exampleText"
                    name="beerDescription"
                    type="textarea"
                    className="form-control-beerInfo"
                    value={formData.beerDescription}
                    onChange={handleChange}
                    placeholder="Exactly how do breweries come up with good beer names? Brewers face many choices when choosing a name for a new brew. Factors such as the type of beer matter greatly.."
                    autoComplete="off"
                  />
                </FormGroup>
              </Row>
              <Row>
                <Col md={5}>
                  <FormGroup>
                    <Label for="exampleABV">Alcohol by vol.</Label>
                    <Input
                      type="text"
                      id="abvId"
                      name="beerABV"
                      placeholder="4% - 6%"
                      value={formData.beerABV}
                      onChange={handleChange}
                      autoComplete="off"
                      className="form-control-beerInfo"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleBeerType">Beer Type</Label>
                    <Input
                      type="text"
                      id="exampleBeerId"
                      name="beerType"
                      autoComplete="off"
                      value={formData.beerType}
                      onChange={handleChange}
                      className="form-control-beerInfo"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              {/* <Label for="examplePhone">Is product on production?</Label>
      <Row>
        <Col md={3}>
          <FormGroup check>
            <Input id="exampleCheck" name="check" type="radio" />
            <Label check for="exampleCheck">
              Active
            </Label>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup check>
            <Input
              id="exampleCheck"
              name="check"
              type="radio"
              autoComplete="off"
            />
            <Label check for="exampleCheck">
              Inactive
            </Label>
          </FormGroup>
        </Col>
      </Row> */}
              <Row>
                <Label for="image">Image Link</Label>
                <Input
                  type="text"
                  id="beerImage"
                  name="beerImage"
                  autoComplete="off"
                  value={formData.beerImage}
                  placeholder="http://www.example.example"
                  onChange={handleChange}
                  className="form-control-beerInfo"
                  required
                />
                <Button onClick={handleSubmit}> Submit </Button>
                {!props.preview && (
                  <Link
                    to={
                      "/beerForm/brewery/" +
                      props.breweryId +
                      "/" +
                      props.beerId
                    }
                  >
                    <Button>Go To Preview</Button>
                  </Link>
                )}
              </Row>
            </Form>
          </Col>

          </Col>





    <Col
      className="col col-md-3"
      
    >
       {props.preview && (
            <Col className="BeeerList---Preview">
              <h5> Beer Preview </h5>
              <BeerListCard beer={formData} />
            </Col>
          )}
    </Col>
  </Row>




    
    </>
  );
}
