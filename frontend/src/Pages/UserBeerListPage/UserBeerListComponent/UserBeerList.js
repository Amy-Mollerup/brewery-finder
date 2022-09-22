import React, { useEffect } from "react";
import axios from "axios";
import { Row, Col, Button, Container } from "reactstrap";
import "./UserBeerListStyle.css";
import BeerListCard from "./BeerListCard";

const UserBeerList = (props) => {


  /* console.log(product_card); */
  const [beers, setBeers] = React.useState([]);
  // console.log(props.breweryId)

  function getBeerList() {
    if (props.breweryId) {
      axios.get("http://localhost:8081/" + props.breweryId + "/beers")
        .then(resp => {
          setBeers(resp.data)
        })
        .catch(error => {
          console.err(error)
        })
    } else {
      axios.get("http://localhost:8081/beers", {})
        .then(resp => {
          setBeers(resp.data)
        })
        .catch(error => {
          console.err(error)
        })
    }
  }

  useEffect(() => getBeerList(), [])
  const listItems = beers.map((beer) => (
    <BeerListCard beer={beer} key={beer.beerName} />
  ));

  return (
    <div className="shell" id="title---style">
      <h3>Beer List</h3>
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
