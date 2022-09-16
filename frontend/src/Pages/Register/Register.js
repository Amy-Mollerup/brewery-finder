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
      DOB: ""
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  handleSubmit = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      role: "USER",
    };
    
    const age = this.getAge(this.state.DOB)
    const passwordMatch = this.state.password === this.state.confirmPassword
    const passwordLength = this.state.password.length >= 8
    const nameLength = this.state.username.length >= 4

    if (passwordMatch && age >= 21 && passwordLength && nameLength) {
      axios.post(baseUrl + "/register", data)
        .then((response) => {
          let status = response.status
          if(status == 201) {
            alert("Your account has been created!")
          }
        })
        .catch((err) => {
          console.error(err);
          alert("This user already exists")
        })
      
      
    } else if (!age >= 21 || !age) {
        alert("You must be over 21 to enter this site");
    } else if (!nameLength) {
      alert("Your username must be at least 4 characters long")
    } else if (!passwordLength) {
      alert("Your password must be at least 8 characters long")
    } else if (passwordMatch) {
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
              <span className="text">Are You 21+?</span>
            </div> */}
          </Col>
          <Col className="Register--form" l={{
        offset: 1,
        size: 'auto'
      }}>
            <label className="sr-only">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Username"
              v-model="user.username"
              onChange={this.handleInputChange}
              required
            />
            <label className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              v-model="user.password"
              onChange={this.handleInputChange}
              required
            />
            <input
              type="password"
              id="password-confirm"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              v-model="user.password"
              onChange={this.handleInputChange}
              required
            />

            <input
              type="date"
              id="DOB"
              name="DOB"
              className="form-control"
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
