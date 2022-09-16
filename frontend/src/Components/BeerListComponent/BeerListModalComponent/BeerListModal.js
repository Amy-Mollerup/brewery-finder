import "./BeerListModalStyle.css";
import "../data/product_data";
import BeerPic from "../../assets/Beer Can Stone.png";
import Reviewer from "../../ReviewerComponent/Reviewer";
import reviewData from "../../ReviewerComponent/data/ReviewData";
import { Row, Col, Button, Container } from "reactstrap";
import product_card from "../data/product_data";

export default function BeerListModal() {

    const listItems = product_card.map((item) => (
        <div className="UserBeerList--container">
          <Row>
            <Col>
              <div className="beerList--product">
                <div className="beerList--img">
                  <img src={item.packagePic} alt="beerImage" />
                </div>
    
                <div className="beerList--text">
                  <div className="category">
                    
                  </div>
                  <div className="title--product">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="description--prod">
                    <p>{item.description}</p>
                  </div>
                  <div className="card--footer">
                    <div className="beerList--left">
                      <span className="price"> {item.abv} </span>{" "}
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ));
    

   
  return (
    <div id= "beer--container" className="shell">
      {/* <h3>Beer List</h3> */}
      <Row md="4"> {listItems} </Row>
    </div>
  );
};



