import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import NavMobile from './component/NavMobile'
import Home from './component/Home'
import Invest from './component/Invest'
import Footer from './component/Footer'
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false)

  function openNav() {
    if (nav === false) {
      setNav(true)
    } else {
      return
    }
  }

  function closeNav() {
    if (nav === true) {
      setNav(false)
    } else {
      return
    }
  }

  return (
    <Router>
      <div className='app'>
        <Navbar openNav={openNav} />
        {nav && <NavMobile closeNav={closeNav} />}
        <Switch>
          <Home exact path='/' />
        </Switch>
        <Switch>
          <Invest exact path='/Invest' />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
