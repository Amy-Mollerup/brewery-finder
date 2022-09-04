import { Button} from 'reactstrap';
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Footer from '../Footer/Footer';
import LandingNav from './LandingNav';
import './HeroStyle.css';
import videoBg from '../assets/pexels-cottonbro-5538282.mp4'
import Login from '../Login/Login';
import Register from '../Register/Register';
const Hero = () => {
 
   
  return (
<div classNameName="container">

<video src= {videoBg} autoPlay loop muted/>
<LandingNav/>
<header  text-align= "center"  >
    <h4>FINDING A BREWERY FINDER! </h4>
    <h2>easy way to discover </h2>
    <h5> Simply join the journey and then receive a list of local breweries. </h5>
    <p >
    A Brewery Finder helps people find out where the local breweries are. 
    It's an easy way to find out information about local businesses and the beer they make. 
    This tool can also be used to find out where local breweries sell their beer. 
    By using the Brewery Finder, you'll be able to understand and enjoy the many wonders of 
    craft beer.
    </p>
    {/*     <Switch>
                    <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                  
        </Switch> */}
    <button className = " btn " > Sing Up </button>
  <button className = " btn " >Login </button > 
 </header>

</div>

  )
}

export default Hero


/*     <div>
    <div>Big Title Here </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <Button> Sign Up </Button>
    <Button> Sing In </Button>
    </div>
 */
   

  /*    
  <div className="row">
  <div className="col-md-8">Logo</div>
  <div className="col-6 col-md-4"> 
      <ul>
          <li> link 1</li>
          <li> link 1</li>
          <li> link 1</li>
      </ul>
  </div>
</div>


<div className="row">
  <div className="col-6 col-md-4">Left Image</div>
  <div className="col-6 col-md-4 text-center">
      <h1 className=""> Big Title Here </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  </div>
  <div className="col-6 col-md-4">right image</div>
</div>

<div className="row">
  <div className="col-6">footer</div>
  
</div> */