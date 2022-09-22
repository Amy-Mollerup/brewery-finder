import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import "./BusinessHoursStyle.css"


export default function BusinessHours(props) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const businessHourElements = daysOfWeek.map((day, index) => {
    return (
      <FormGroup row key={index}>
        <Label sm={4} style={{ paddingBottom: 1 }}>
          <h5>{day}</h5>
        </Label>
        <Label sm={4}>

        </Label>
        <Col sm={4}>
          <Input
            id={index}
            type="text"
            value={props.breweryHours[index][0]}
            onChange={props.handleHoursChange}
          />
        </Col>
        <Col sm={4}>
          <Input
            id={index + 7}
            type="text"
            value={props.breweryHours[index][1]}
            onChange={props.handleHoursChange}
          />
        </Col>
      </FormGroup>


    )
  })

  return (
    <FormGroup className="businessHour--section">

      <span> Business Hours </span>

      <div className='businessHour--list'>
        {businessHourElements}
      </div>

    </FormGroup>
  )
}
