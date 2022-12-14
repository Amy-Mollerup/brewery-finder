import { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToken, addUser } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";
import "./LoginStyle.css"

const mapDispatchToProps = (dispatch) => ({
  addToken: () => dispatch(addToken()),
  addUser: () => dispatch(addUser()),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin = async () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    const userWithToken = await axios.post(baseUrl + "/login", data).catch(err => {
      console.error(err);
      alert("Incorrect username or password")
    })

    this.state.auth = JSON.stringify(userWithToken.data.user.authorities[0]?.name)?.replace(/['"]+/g, '')

    await this.props.dispatch(addToken(userWithToken.data.token));
    await this.props.dispatch(addUser(userWithToken.data.user));

    if(this.state.auth === "ROLE_USER") {
      this.props.history.push('/welcome')
    } else if (this.state.auth === "ROLE_ADMIN" || this.state.auth === "ROLE_BREWER") {
      this.props.history.push('/brewerDash')
    }
    
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Row>
          <Col className="LoginForm--container">
            <h1>Sign In </h1>
            <p>
              Since beer is an international product with strong local
              traditions, people have traveled to discover new breweries around
              the world. Some explorers have gone off on their own to find new
              locations
            </p>
          </Col>

          <Col
            className="LoginForm--form"
            l={{
              offset: 1,
              size: "auto",
            }}
          >
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
            <Link to="/register" id="linkLine">Need an account?</Link>
            <button
              className="btn--signIn"
              type="submit"
              onClick={this.handleLogin}
            >
              Sign in
            </button>
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(Login));
