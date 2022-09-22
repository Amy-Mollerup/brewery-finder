import {Component} from 'react'
import { Switch, Route, Redirect, Link, withRouter } from 'react-router-dom'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import AuthorizationWarning from '../AuthorizationWarning/AuthorizationWarning'

import BeerLoverWelcomePage from '../../Pages/BLWelcomePage/BeerLoverWelcomePage'
import BrewerDashboard from '../../Pages/BrewerDashboardPage/BrewerDashboard'
import BreweriesListPage from '../../Pages/BreweriesListPage/BreweriesListPage'
import BeerDetail from '../../Pages/BreweryBeerFormPage/BeerDetail'
import BrewerBeerList from '../../Pages/BreweryBeerListPage/BrewerBeerList'
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

    navigate = (path) => {
        this.props.history.push(path)
    }
    
    render(){
        const loggedIn = this.props.token.token !== undefined
        const authorities = (JSON.stringify(this.props.user.authorities[0]?.name)?.replace(/['"]+/g, ''))
        const isAuthorized = authorities === "ROLE_ADMIN" || authorities === "ROLE_BREWER"
        const homePage = authorities === "ROLE_ADMIN" || "ROLE_BREWER" ? '/brewerDash' : '/welcome'

        const BreweryFormWithId = ({match}) => {
            return loggedIn && isAuthorized ? <BreweryForm breweryId={match.params.breweryId} brewer={this.props.user.id} navigate={this.navigate}/> : <AuthorizationWarning/>
        }

        const BrewerBeerListWithId = ({match}) => {
            return loggedIn && isAuthorized ? <BrewerBeerList breweryId={match.params.id}/> : <AuthorizationWarning/>
        }

        const BeerFormWithId = ({match}) => {
            return loggedIn && isAuthorized ? <BeerDetail breweryId={match.params.breweryId} beerId={match.params.beerId} navigate={this.navigate}/> : <AuthorizationWarning/>
        }

        const BeerListWithId = ({match}) => {
            return loggedIn ? <UserBeerList breweryId={match.params.breweryId} /> : <AuthorizationWarning/>
        }
        
        return(
            <div className='project-container'>
            <Header 
                handleLogout={this.handleLogout}
                loggedIn={loggedIn}
                authorities={authorities}
                homePage={homePage}
                />
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
            {/* <BreweryCardDemoPage/> */}
        {/*  <BreweryInformationModal /> */}
{/*                 
                <Switch>
                    <Route path='/welcome'component={() => <BeerLoverWelcomePage/>}/>
                    <Route path='/brewerDash' component={() => <BrewerDashboard/>}/>
                    <Route path='/breweryList' component={() => <BreweriesListPage/>}/>
                    <Route path='/beerForm' component={() => <BeerDetail/>}/>
                    <Route path='/brewerBeerList' component={() => <BrewerBeerList/>}/>
                    <Route path='/brewery' component={() => <BreweryForm />}/>
                    <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/beerList' component={() => <UserBeerList />}/>
                    <Redirect to='/landingPage'/>
                </Switch> */}
                <Switch>
                    {/* For Beer Lovers */}
                    <Route path='/welcome'component={loggedIn ? () => <BeerLoverWelcomePage/> : () => <AuthorizationWarning/>}/>
                    <Route path='/breweryList' component={loggedIn ? () => <BreweriesListPage/> : () => <AuthorizationWarning/>}/>
                    <Route path='/beerList/:breweryId?' component={BeerListWithId}/>
                    {/* For Brewers */}
                    <Route path='/brewerDash' component={loggedIn && isAuthorized ? () => <BrewerDashboard user={this.props.user} navigate={this.navigate}/> : () => <AuthorizationWarning/>}/>
                    <Route path='/beerForm/brewery/:breweryId/:beerId?' component={BeerFormWithId}/>
                    <Route path='/brewerBeerList/:id?' component={BrewerBeerListWithId}/>
                    <Route path='/brewery/:breweryId?' component={BreweryFormWithId}/>
                    {/* Landing and Login */}
                    <Route path='/landingPage'component={() => <Hero/>}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Redirect to='/landingPage' />
                </Switch>


            {this.props.location.pathname !== '/landingPage' && <Footer/>}
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