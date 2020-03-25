import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ResultPage from './ResultPage';
import App from '../App';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/searchResult" component={ResultPage}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;



// export default [
//     { key: '/index/search', title: 'ResultPage', component: 'ResultPage'},  

// ]