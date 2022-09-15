import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Popup from "reactjs-popup";
import product_card from "../../../Components/BeerListComponent/data/product_data";
import "./BeerListStyle.css";
import BrewerAccessReviewComp from "../BrewerAccessReviewComponent/BrewerAccessReviewComp";
import BeerForm from "../../../Components/BeerFormComponent/BeerForm"
const BrewerBeerList = () => {
  const reviewLists = <BrewerAccessReviewComp />
  const editBeer = <BeerForm/>
  /* console.log(product_card); */
  const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
           {/*  <img alt="Card" src= {require("./data/Beer-Pic.png") }/> */}
           <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.type}<span>\ abv : {item.abv}%</span></p>
                
                <Popup
                  trigger={ <div className="beer-btn">Edit</div>}
                  position="center center"
                  modal
                  >
                  {(close) => (
                    <div>
                      {editBeer}
                      <a className="close" onClick={close}>
                    
                        &times;
                      </a>
                    </div>
                  )}
                </Popup>
                
                <div className="beer-btn" onClick={editBeer}>Delete</div>
                
                <Popup
                  trigger={ <div className="beer-btn">Reviews</div>}
                  position="center center"
                  modal
                  >
                  {(close) => (
                    <div>
                      {reviewLists}
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
           <h3>Yours Beer List <span> </span></h3> 
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