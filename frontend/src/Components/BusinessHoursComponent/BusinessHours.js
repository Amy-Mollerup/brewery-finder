import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./BusinessHoursStyle.css"


export default function BusinessHours() {
  return (
    <Form className="businessHour--section">
    <Col >
         <span> Business Hours </span> 

          <Col className='businessHour--list'>
            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Monday</h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Tuesday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Wednesday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Thursday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>


            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Friday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Saturday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleBusinessHours" sm={4}>
               <h5> Sunday </h5>
              </Label>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="openingTimeStamp"
                  placeholder="9:00 AM"
                  type="time"
                />
              </Col>
              <Col sm={4}>
                <Input
                  id="businessHoursId"
                  name="closingTimeStamp"
                  placeholder="10:00 PM"
                  type="time"
                />
              </Col>
            </FormGroup>    
          </Col>
    
        </Col>
        </Form>
  )
}
