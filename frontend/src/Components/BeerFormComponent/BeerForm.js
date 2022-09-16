import React from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
export default function BeerForm() {
  return (
    <Form className="breweryInfo--container">
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
              name="brewer"
              placeholder="Cool Beer Name"
              type="text"
              autoComplete="off"
              className="form-control-plaintext"
              required
            />
          </FormGroup>
        </Col>

        <FormGroup>
        <Label for="exampleText">
          Brewery Description
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
          className="ta10em"
          placeholder="Exactly how do breweries come up with good beer names? Brewers face many choices when choosing a name for a new brew. Factors such as the type of beer matter greatly.."
          autoComplete="off"
        />
      </FormGroup>

      </Row>
      <Row>
        <Col md={5}>
          <FormGroup>
            <Label for="exampleABV">Alcohol by volume</Label>
            <Input
              id="abvId"
              name="abv"
              placeholder="4% - 6%"
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
              id="exampleBeerId"
              name="beer_detail"
              autoComplete="off"
              className="form-control-plaintext"
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Label for="examplePhone">Is product on production?</Label>
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
