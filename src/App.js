import React from 'react'
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import LandingPage from "./home";
import UsersPage from "./resources/Users";
import TrackedEntityInstancesPage from "./resources/TrackedEntityInstances";
import ProgramsPage from "./resources/Programs";

const query = {
    me: {
        resource: 'me',
    },
}

const routes = [
    'users',
    'trackedEntityInstances',
    'programs'
]

const MyApp = () => (
   <Router>
       <Route path='/' component={withRouter(LandingPage)}  />
       <Route path='/users' component={withRouter(UsersPage)}  />
       <Route path='/trackedEntityInstances' component={withRouter(TrackedEntityInstancesPage)}  />
       <Route path='/programs' component={withRouter(ProgramsPage)}  />
   </Router>
)

export default MyApp
