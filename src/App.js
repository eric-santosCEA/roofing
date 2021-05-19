import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar.js'))
const Home = lazy(() => import('./components/Home'))
const Work = lazy(() => import('./components/Work'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

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
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
