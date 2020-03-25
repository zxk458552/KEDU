import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import IndexPage from './pages/IndexPage';



class App extends React.Component {
  render() {
    return (
      <div>
        
        <Router>
        <Switch>
            {/* <Redirect from = '/' to='/index/:id' exact></Redirect> */}
            {/* <Route exact path="/index/:id" component={IndexPage}/> */}
            <Route exact path="/" component={IndexPage}/>
            <Route exact path="/index/searchResult/:id" component={ResultPage}/>
        </Switch>
    </Router>
   
  </div>
);
}
}
export default App;
