import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import errorHandler from '../src';

const Root = (props) => {
  return (
    <ul>
      <li><Link to='/pageOne'>Page One</Link></li>
      <li><Link to='/pageTwo'>Page Two</Link></li>
      <li><Link to='/pageThree'>Page Three</Link></li>
      <hr/>
      {props.children}
    </ul>
  );
}

const ErrorDisplay = (props) => {
  return <pre>Error: {JSON.stringify(props.error.toString())}</pre>
}

function handleError(error) {
  console.log('FOUND ERROR: ' + error.toString());
}

export class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Root}>
          <Route path='/pageOne' component={errorHandler(PageOne, ErrorDisplay, handleError)}/>
          <Route path='/pageTwo' component={errorHandler(PageTwo, ErrorDisplay, handleError)}/>
          <Route path='/pageThree' component={errorHandler(PageThree, ErrorDisplay, handleError)}/>
        </Route>
      </Router>
    );
  }
}
