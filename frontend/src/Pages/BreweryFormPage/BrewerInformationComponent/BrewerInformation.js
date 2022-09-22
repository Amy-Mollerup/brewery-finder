import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./BrewerInformationStyle.css";

export default function BrewerInformation(props) {
  return (
    <FormGroup className="breweryInfo--container">
      <Col>
        <img src={require("../../../Components/assets/cheers-DashPic.png")} alt="Avatar" />{" "}
        <span> Brewer Information </span>
     </Col>
      <Col >
       
      </Col>

      <Row>
        <Col>
          <FormGroup>
            <Label for="breweryName">Brewer Name</Label>
            <Input
              id="breweryName"
              name="breweryName"
              placeholder="Brewer or Company Name"
              type="text"
              autoComplete="off"
              className="form-control--plaintext"
              value={props.breweryName}
              onChange={props.handleChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleWebsite">Website</Label>
        <Input
          id=""
          name="website"
          placeholder="http://"
          autoComplete="off"
          className="form-control--plaintext"
          value={props.website}
          onChange={props.handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          id="exampleAddress"
          name="breweryStreet"
          placeholder="1234 Main St"
          autoComplete="off"
          className="form-control--plaintext"
          value={props.breweryStreet}
          onChange={props.handleChange}
          required
        />
      </FormGroup>
      <Row>
        <Col md={11}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              id="exampleCity"
              name="breweryCity"
              autoComplete="off"
              className="form-control--plaintext"
              value={props.breweryCity}
              onChange={props.handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input
              id="exampleState"
              name="breweryState"
              autoComplete="off"
              className="form-control--plaintext"
              value={props.brewerState}
              onChange={props.handleChange}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleZip">Zip Code</Label>
            <Input
              id="exampleZip"
              name="breweryPostCode"
              autoComplete="off"
              className="form-control--plaintext"
              value={props.breweryPostCode}
              onChange={props.handleChange}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Col md={6}>
        <FormGroup>
          <Label for="examplePhone">Phone</Label>
          <Input
            id="phoneId"
            name="phoneNumber"
            placeholder="8062317495"
            type="text"
            autoComplete="off"
            className="form-control--plaintext"
            value={props.phoneNumber}
            onChange={props.handleChange}
          />
        </FormGroup>
      </Col>

      <FormGroup>
      <br />
        <Label for="exampleText">
          <span>Brewery Description</span>{" "}
        </Label>
        <Input
          id="description"
          name="description"
          type="textarea"
          className="form-control--plaintext"
          placeholder="Brewery History and Details"
          value={props.description}
          onChange={props.handleChange}
          autoComplete="off"
          
        />
      </FormGroup>

      <Label id= "question---info" for="exampleCheck">Is company in operation?</Label>
      <Row>

        <Col className="Radio---Yes-No" 
        md={3}>
          <FormGroup check>
            <Input 
              id="exampleCheck" 
              name="active" 
              type="radio"
              value="true"
              checked={props.active === "true" || props.active === true}
              onChange={props.handleChange}
              />
            <Label check for="exampleCheck">
             <p> Active </p>
            </Label>
          </FormGroup>    

          <FormGroup check>
            <Input
              id="exampleCheck"
              name="active"
              type="radio"
              checked={props.active === "false" || props.active === false}
              value="false"
              onChange={props.handleChange}
            />
            <Label check for="exampleCheck">
             <p> Inactive </p> 
            </Label>
          </FormGroup>
          </Col>
      </Row>
    </FormGroup>
  );
}
