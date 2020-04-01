import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import IndexPage from './pages/IndexPage';
import PayPage from './pages/PayPage';
import PayResult from './pages/PayResult';

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
            <Route exact path="/index/payPage/:id" component={PayPage}/>
            <Route exact path="/index/payResult/:id" component={PayResult}/>
        </Switch>
    </Router>
   
  </div>
);
}
}
export default App;
