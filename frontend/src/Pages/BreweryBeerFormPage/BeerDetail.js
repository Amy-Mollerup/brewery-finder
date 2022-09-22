import React from "react";
import { Row, Col, Button } from "reactstrap";
import FileUploader from "../../Components/FileUploaderComponent/FileUploader";
import "./BeerDetailStyle.css";
import BreweryProfileDetail from "../../Components/BreweryProfileDetailComponent/BreweryProfileDetail";
import BeerForm from "../../Components/BeerFormComponent/BeerForm";
import BeerListCard from "../UserBeerListPage/UserBeerListComponent/BeerListCard";


export default function BeerDetails(props) {
  return (
    <>
      <Row>
        <Col xs="2">
          <BreweryProfileDetail />
        </Col>
      </Row>
      <Row className="Beeeer--FormStyle">
        <BeerForm breweryId={props.breweryId} beerId={props.beerId} preview={true} navigate={props.navigate} />
      </Row>
    </>
  );
}
