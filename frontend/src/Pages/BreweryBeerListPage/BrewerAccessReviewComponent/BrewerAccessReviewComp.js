import React, { useEffect } from "react";
import { Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BrewerAccessReviewStyle.css";
import axios from "axios";


const BrewerAccessReviewComp = (props) => {

  const [reviews, setReviews] = React.useState([]);
  
  function getReviews(){
    const url = 'http://localhost:8081/beer/' + props.beerId + '/reviews'
    axios.get(url, [])
    .then(resp => {
        setReviews(resp.data)
    })
  }

  useEffect(() => {getReviews()}, [])

  const reviewLists = reviews.map((item) => (
    <div className="row" key={item.beerId}>
      <div className="col-lg-5">
        <div
          className="box d-flex align-items-center wow fadeInLeft"
          id="rev--box"
        >
          <div className="testimonials">
            {/* <h3>
              {item.username}
              <span>Beer Lover</span>
            </h3> */}
            <p>{item.review}</p>
          </div>
          {/* <div className="image">
            <img
              src="https://i.ibb.co/8x9xK4H/team.jpg"
              alt=""
              className="img-fluid"
              id="rev--image"
            />
          </div> */}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="testimonials" id="reviewer--container">
      <Col className="heading wow fadeIn text-center" fluid="sm">
        <h2>
          Beer Lovers'
          <span> Reviews</span>
        </h2>
      </Col>

      <Row className="reviewlist" md="1"> {reviewLists} </Row>
    </div>
  );
};

export default BrewerAccessReviewComp;
