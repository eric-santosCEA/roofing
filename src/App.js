import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const Home = lazy(() => import('./components/Home'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Services = lazy(() => import('./components/Services'))
const OurWork = lazy(() => import('./components/OurWork'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/our-work" component={OurWork} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App
