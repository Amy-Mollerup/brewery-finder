import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "reactstrap";
import product_card from "./data/product_data";
import "./UserBeerListStyle.css";
import BeerReviewPage from "../BeerReviewPage/BeerReviewPage";

const UserBeerList = () => {
  /* console.log(product_card); */
  const reviewLiked = <BeerReviewPage />;
  const listItems = product_card.map((item) => (
    <div className="UserBeerList--container">
      <Row>
        <Col>
          <div className="beerList-cp-product">
            <div className="beerList-cp-img">
              <img src={item.packagePic} alt="beerImage" />
            </div>

            <div className="beerList-cp-text">
              <div className="category">
                {/* https://react-popup.elazizi.com/react-modal */}
                <Popup
                  trigger={<span>{item.type}</span>}
                  position="center center"
                  modal
                  >
                  {(close) => (
                    <div>
                      {reviewLiked}
                      <a className="close" onClick={close}>
                        {" "}
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
              </div>
              <div className="title-product">
                <h3>{item.name}</h3>
              </div>
              <div className="description-prod">
                <p>{item.description}</p>
              </div>
              <div className="card-footer">
                <div className="beerList-left">
                  <span class="price"> {item.abv} </span>{" "}
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <div className="beerList-right">
                  <a href="#" class="review-btn">
                    <i class="zmdi zmdi-shopping-basket"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  ));

  return (
    <div className="shell">
      {/* <h3>Beer List</h3> */}
      <Row md="4"> {listItems} </Row>
    </div>
  );
};

export default UserBeerList;

/*  {
    const baseURL = "http://localhost:8081/1/beers";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  } */

{
  /* 
        <div className="card_img">
            <img src={item.thumb} alt='beerImage'/>
        </div>
        <div className="card_header">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.type}<span>{item.abv}</span></p>
            <div className="btn">Edit</div>
            <div className="btn">Delete</div>
        </div> */
}

/* const listItems = product_card.map((item) => (
          <div className="card_content" key={item.id}>
            <Card className="card--layout">
              <img alt="Card" src= {require("./data/Beer-Pic.png") }/>
              <CardBody>
                <CardTitle tag="h2">{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>{item.type}</ListGroupItem>
                <ListGroupItem>{item.abv} % </ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href="#">Edit</CardLink>
                <CardLink href="#">Delete</CardLink>
              </CardBody>
            </Card>
      
          </div>
        ));
        return (
          <div className="main_content">  
           <h3>Beer List</h3> 
      
           {listItems}
      
             
                  
          </div>
        ); */

/*         <div className="product" key={item.id}>
        <div className="product-img">
    
      <img src={item.thumb} />
        </div>
        <div className="card_header">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.type}<span>\ abv : {item.abv}%</span></p>
            <div className="beer-btn">Learn More</div>
           
        </div>
    </div> */
