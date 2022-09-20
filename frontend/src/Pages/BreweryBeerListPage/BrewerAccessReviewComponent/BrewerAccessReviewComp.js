import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BrewerAccessReviewStyle.css";
import axios from "axios";

const BrewerAccessReviewComp = (props) => {
  const [reviews, setReviews] = React.useState([]);

  function getReviews() {
    const url = "http://localhost:8081/beer/" + props.beerId + "/reviews";
    axios.get(url, []).then((resp) => {
      setReviews(resp.data);
    });
  }

  useEffect(() => {
    getReviews();
  }, []);

  const reviewLists = reviews.map((item) => (
    <Row  key={item.beerId}>
      <Col className="col-md-11">
        <div
          className= "BrewerAccessReview--box">
       
            {new Array(item.rating).fill(null).map(() => (
              <i
                className="fas fa-star"
                style={{ color: "orange", fontSize: "20px" }}
              />
            ))} 
            <br />
            <p>{item.review}</p>


            <h6>- {item.id}</h6>
          </div>
        
      </Col>
    </Row>
  ));


  return (
    <div className="BrewerAccessReview--container">
      <Row>
        <Col
          className="heading wow fadeIn text-center"
          id="reviewer--container"
        >
          <h2>
            Beer Lovers'
            <span> Reviews</span>
          </h2>
        </Col>
      </Row>

      <Row>
        <Col className=""> {reviewLists}</Col>
      </Row>
    </div>
  );
};

export default BrewerAccessReviewComp;
