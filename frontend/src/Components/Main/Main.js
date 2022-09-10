import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import Hero from '../LandingPage/Hero'
import BrewerDashboard from '../BrewerDashboardPage/BrewerDashboard'
import BreweryForm from '../BreweryFormPage/BreweryForm'
import BeerDetails from '../BeerDetailPage/BeerDetail'
import BeerLoverWelcomePage from '../BeerLoverWelcomePage/BeerLoverWelcomePage'
import BeerList from "../BreweryBeerListPage/BeerList"
import UserBeerList from '../UserBeerListPage/UserBeerListPage'
import BeerReviewPage from '../BeerReviewPage/BeerReviewPage'
import BrewerBeerList from '../BeerListComponent/BrewerBeerList'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        return(
            <div>
            {/* <Hero /> */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <BrewerDashboard /> */}
            {/* <BreweryForm /> */}
            {/* <BeerDetails /> */}
           {/*  <BrewerBeerList /> */}
            {/* <BeerReviewPage /> */}
           {/*  <UserBeerList /> */}
           {/*  <BeerReviewPage /> */}
            
                 
                
                <Switch>
                    <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>\
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/beerDetails' component={() => <BeerDetails/>}/>
                    <Route path='/brewery' component={() => <BreweryForm />}/>
                    <Route path='/beerList' component={() => <BeerList />}/>
                    <Route path='/breweryDash' component={() => <BrewerDashboard/>}/>
                    <Redirect to='/ladingPage'/>
                </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

/* 
render(){
    return(
        <div>
                       
            {this.props.token.token !== undefined ?
                    <div>
                        <Link to='/home'>Home | </Link>
                        <Link to='/login' onClick={this.handleLogout}>logout</Link> 
                        <Redirect to='/home'/>

                    </div>  
                : 
                    <Link to='/login'>Home | </Link>
            }
            <Switch>
                <Route path='/landingPage'component={() => <Hero/>}/>
                <Route path='/login' component={() => <Login/>}/>
                <Route path='/register'component={() => <Register/>}/>
                <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                <Redirect to='/login'/>
            </Switch>
        </div>
    )
}
}  */