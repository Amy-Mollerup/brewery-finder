import axios from "axios";
import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./BeerForm.css"
export default function BeerForm(props) {

  const [formData, setFormData] = React.useState({
    'beerId': props.beer.beerId,
    'beerName': props.beer.beerName,
    'beerDescription': props.beer.beerDescription,
    'beerABV': props.beer.beerABV,
    'beerType': props.beer.beerType,
    'beerImage': props.beer.beerImage,
    "brewery": props.beer.brewery

  })

  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
    console.log(formData);
}

function handleSubmit(event){
  event.preventDefault()
  console.log(formData);
  console.log(props.beer.beerId);
  axios.put('http://localhost:8081/beer/' + props.beer.beerId, formData)
  // .then(window.location.reload())
}
  
  return (
    <Form className="beerInfo--container" onSubmit={handleSubmit}>
      <Col>
        <img src={require("../assets/cheers-DashPic.png")} alt="Avatar" />{" "}
        <span> Beer Details </span>
     </Col>
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
              className="form-control-plaintext"
              required
            />
          </FormGroup>
        </Col>

        <FormGroup>
        <Label for="exampleText">
          Beer Description
        </Label>
        <Input
          id="exampleText"
          name="beerDescription"
          type="textarea"
          className="form-control-plaintext"
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
              className="form-control-plaintext"
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
              className="form-control-plaintext"
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

      <button>
        Submit
      </button>
    </Form>
  );
}
