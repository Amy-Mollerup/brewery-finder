import {Component} from 'react'
import { Switch, Route, Redirect, Link, withRouter } from 'react-router-dom'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import BeerLoverWelcomePage from '../../Pages/BLWelcomePage/BeerLoverWelcomePage'
import BrewerDashboard from '../../Pages/BrewerDashboardPage/BrewerDashboard'
import BreweriesListPage from '../../Pages/BreweriesListPage/BreweriesListPage'
import BeerDetail from '../../Pages/BreweryBeerFormPage/BeerDetail'
import BrewerBeerList from '../../Pages/BreweryBeerListPage/BreweryBeerListComponent/BrewerBeerList'
import BreweryForm from '../../Pages/BreweryFormPage/BreweryForm'
import Hero from '../../Pages/LandingPage/Hero'
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import UserBeerList from '../../Pages/UserBeerListPage/UserBeerListPage'

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
            <div className='project-container'>
            <Header/>
            {/* <BeerLoverWelcomePage/> */}
            {/* <BrewerDashboard/> */}
            {/* <BreweriesListPage/> */}
            {/* <BeerDetail/> */}
            {/* <BrewerBeerList/> */}
            {/* <BreweryForm/> */}
            {/* <Home/> */}
            {/* <Hero/> */}
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <UserBeerList/> */}
                
                <Switch>
                    <Route path='/welcome'component={() => <BeerLoverWelcomePage/>}/>
                    <Route path='/brewerDash' component={() => <BrewerDashboard/>}/>
                    <Route path='/breweryList' component={() => <BreweriesListPage/>}/>
                    <Route path='/beerForm' component={() => <BeerDetail/>}/>
                    <Route path='/brewerBeerList' component={() => <BrewerBeerList/>}/>
                    <Route path='/brewery' component={() => <BreweryForm />}/>
                    <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>\
                    <Route path='/beerList' component={() => <UserBeerList />}/>
                    <Redirect to='/landingPage'/>
                </Switch>

            {this.props.location.pathname != '/landingPage' && <Footer/>}
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