import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { baseUrl } from "../../Shared/baseUrl";
import "./RegisterStyle.css"


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      role: "USER",
    };
    if (this.state.password === this.state.confirmPassword) {
      axios.post(baseUrl + "/register", data);
    } else {
      alert("Password and Confirm Password must match!!!");
    }
  };

  render() {
    return (
      <>
        <Row>
        
          <Col className="Register--container">
            <h1>Create Account</h1>
            <p>
              A Brewery is a place where different kinds of beer are made for
              commercial use or enjoyment by consumers.
              <br/>
              <span>*Intended for adults 21 years or older. If you are not, please do not enter this site</span>
            </p>
            {/* <div className="sticker">
              <span class="text">Are You 21+?</span>
            </div> */}
          </Col>
          <Col className="Register--form" l={{
        offset: 1,
        size: 'auto'
      }}>
            <label class="sr-only">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Username"
              v-model="user.username"
              onChange={this.handleInputChange}
              required
            />
            <label class="sr-only">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Password"
              v-model="user.password"
              onChange={this.handleInputChange}
              required
            />
            <input
              type="password"
              id="password-confirm"
              name="confirmPassword"
              class="form-control"
              placeholder="Confirm Password"
              v-model="user.password"
              onChange={this.handleInputChange}
              required
            />

            <input
              type="date"
              id="DOB"
              name="DOB"
              class="form-control"
              placeholder="Date of Birth"
              v-model="user.password"
              onChange={this.handleInputChange}
              required
            />
            
            <Link to="/login" id="linkLine">Have an account?</Link>
            <button
              className="btn--signUp"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign Up
            </button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Register;
