import React from 'react';
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import "./BusinessHoursStyle.css"


export default function BusinessHours(props) {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const businessHourElements = daysOfWeek.map((day, index) => (
    <FormGroup row key={index}>
      <Label sm={4}>
        <h5>{day}</h5>
      </Label>
      <Col sm={4}>
        <Input
        id={`${index} start`}
          type="time"
          onChange={props.handleHoursChange}
        />
      </Col>
      <Col sm={4}>
        <Input
          id={`${index} end`}
          type="time"
          onChange={props.handleHoursChange}
        />
      </Col>
    </FormGroup>
  ))

  return (
    <Form className="businessHour--section">
      <Col >
        <span> Business Hours </span>

        <Col className='businessHour--list'>
          {businessHourElements}
        </Col>

      </Col>
    </Form>
  )
}
