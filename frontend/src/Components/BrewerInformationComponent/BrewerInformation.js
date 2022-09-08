import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./BrewerInformationStyle.css";

export default function BrewerInformation() {
  return (
    <Form className="breweryInfo--container">
      <Col>
        <img src={require("../assets/cheers-DashPic.png")} alt="Avatar" />{" "}
        <span> Brewer Information </span>
     </Col>
      <Col >
       
      </Col>

      <Row>
        <Col>
          <FormGroup>
            <Label for="brewerName">Brewer Name</Label>
            <Input
              id="brewerId"
              name="brewer"
              placeholder="Brewer Name"
              type="text"
              autoComplete="off"
              className="form-control-plaintext"
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
          className="form-control-plaintext"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          id="exampleAddress"
          name="address"
          placeholder="1234 Main St"
          autoComplete="off"
          className="form-control-plaintext"
          required
        />
      </FormGroup>
      <Row>
        <Col md={11}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              id="exampleCity"
              name="city"
              autoComplete="off"
              className="form-control-plaintext"
              required
            />
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input
              id="exampleState"
              name="state"
              autoComplete="off"
              className="form-control-plaintext"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleZip">Zip Code</Label>
            <Input
              id="exampleZip"
              name="post_code"
              autoComplete="off"
              className="form-control-plaintext"
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
            name="phone"
            placeholder="8062317495"
            type="text"
            autoComplete="off"
            className="form-control-plaintext"
          />
        </FormGroup>
      </Col>

      <FormGroup>
        <Label for="exampleText">
          <span>Brewery Description</span>{" "}
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          class="ta10em"
          placeholder="Brewery History and Details"
          autoComplete="off"
        />
      </FormGroup>

      <Label for="examplePhone">Is company in operation?</Label>
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
      </Row>
    </Form>
  );
}
