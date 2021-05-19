import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar.js'))
const Home = lazy(() => import('./components/Home'))
const Work = lazy(() => import('./components/Work'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const ServiceOne = lazy(() => import('./components/services/ServiceOne'))
const ServiceTwo = lazy(() => import('./components/services/ServiceTwo'))
const ServiceThree = lazy(() => import('./components/services/ServiceThree'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service-One" component={ServiceOne} />
            <Route exact path="/service-Two" component={ServiceTwo} />
            <Route exact path="/service-Three" component={ServiceThree} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
