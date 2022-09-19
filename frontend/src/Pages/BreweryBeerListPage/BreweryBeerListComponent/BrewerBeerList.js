import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import product_card from "../../../Components/BeerListComponent/data/product_data";
import "./BeerListStyle.css";
import BrewerAccessReviewComp from "../BrewerAccessReviewComponent/BrewerAccessReviewComp";
import BeerForm from "../../../Components/BeerFormComponent/BeerForm"
import { useEffect } from "react";
const BrewerBeerList = (props) => {
  const reviewLists = <BrewerAccessReviewComp />
  const editBeer = <BeerForm />

  const [beers, setBeers] = React.useState([])

  const API_BASE = 'http://localhost:8081/'

  function getBeerList() {
    if (props?.breweryId || props?.breweryId === 0) {
      axios.get(API_BASE + `${props.breweryId}/beers`)
      .then(response => {
        setBeers(response.data)
      })
    } else {
      axios.get(API_BASE + 'beers')
        .then(response => {
          setBeers(response.data)
        })
    }
  }

  function deleteBeer(beerId){
    axios.delete(API_BASE + 'beer/' + beerId)
    .then(resp => {
      if(resp.status === 200) {
        alert("Beer deleted")
        window.location.reload()
      } else {
        alert("Something went wrong!")
      }
    })
  }

  useEffect(() => getBeerList(), [])

  /* console.log(product_card); */
  const listItems = beers.map((item) =>
    <div className="card" key={item.beerId}>
      <div className="card_img">
        {/*  <img alt="Card" src= {require("./data/Beer-Pic.png") }/> */}
        <img src={item.beerImage} />
      </div>
      <div className="card_header">
        <h2>{item.beerName}</h2>
        <p>{item.beerDescription}</p>
        <p className="price">{item.beerType}<span>\ abv : {item.beerABV}%</span></p>

        <Popup
          trigger={<div className="beer-btn">Edit</div>}
          position="center center"
          modal
        >
          {(close) => (
            <div>
              <BeerForm beerId={item.beerId} breweryId={props.breweryId} />
              <a className="close" onClick={close}>

                &times;
              </a>
            </div>
          )}
        </Popup>

        <Popup
            trigger={<button className="beer-btn">Delete</button>}
            position="center center"
            modal
            >{(close) => (
              <div className="DeletePopUp--container">
              <p>Really delete?</p>
              <button id="Option--YesNo" onClick={() => deleteBeer(item.beerId)}>Yes</button>
              <button id="Option--YesNo" onClick={close}>No</button>
              </div>
            )}
            </Popup>

        <Popup
          trigger={<div className="beer-btn">Reviews</div>}
          position="center center"
          modal
        >
          {(close) => (
            <div>
              <BrewerAccessReviewComp beerId={item.beerId}/>
              <a className="close" onClick={close}>

                &times;
              </a>
            </div>
          )}
        </Popup>


      </div>
      
    </div>

  );

  return (
    <>
      <div className="main_content">
        <h3>Brewer Beers</h3>
        <div className="AddBrwerBeer--Btn"> Add New Beer</div>

        {/*add beer link*/}
        <div className='addbeer-button blue'><Link to={'/beerForm/brewery/' + props.breweryId}>+</Link></div>             
        {listItems}
      </div>
    </>
  )

};

export default BrewerBeerList;

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


{/* 
        <div className="card_img">
            <img src={item.thumb} alt='beerImage'/>
        </div>
        <div className="card_header">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">{item.type}<span>{item.abv}</span></p>
            <div className="btn">Edit</div>
            <div className="btn">Delete</div>
        </div> */}

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