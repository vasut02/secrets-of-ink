import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// ~IMPORT COMPONENTS 
import Home from 'components/Home'
import Gallery  from 'components/Gallery'
import Navbar  from 'components/Navbar'
import Packages  from 'components/Packages'
import pdfRender from 'components/PdfRender'

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/packages' component={Packages}/>
          <Route exact path='/pdf' component={pdfRender}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App

