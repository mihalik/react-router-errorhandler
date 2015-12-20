# React Router Error Handler

A wrapper for a React component that will render a second component if there are errors rendering the component.  Heavily inspired by [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) and [getsentry](https://github.com/getsentry/sentry/pull/2466/files).  It is designed to wrap your root components to display friendly errors when a component fails in production.  Rather than just displaying a blank screen.

### Example
```js
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
        <Route path='/pageOne' component={errorHandler(PageOne, ErrorDisplay, handleError)}/>
      </Router>
    );
  }
}
```

### Note:
This is currently only catching errors in the `render()` method of your components.  This is not the only place a component can fail and give you a blank screen.  The component's constructor or `componentWillMount` or some custom methods could cause problems.  [This fork](https://github.com/timbur/react-transform-catch-errors/blob/master/src/index.js) of react-transform-catch-errors has an example of monkey-patching every method but it might not be the best plan in production.
