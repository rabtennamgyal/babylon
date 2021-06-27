import { BrowserRouter as Router, Switch} from "react-router-dom";
import Navbar from './component/Navbar'
import NavMobile from './component/NavMobile'
import Home from './component/Home'
import Invest from './component/Invest'
import Bank from './component/Bank'
import Education from './component/Education'
import Footer from './component/Footer'
import SignUp from './component/SignUp'
import LogIn from "./component/LogIn";
import { useState } from "react";

// helpers
import ScrollToTop from "./component/helper/scroll";

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
      <ScrollToTop />
      <div className='app'>
        <Navbar openNav={openNav} />
        {nav && <NavMobile closeNav={closeNav} />}
        <Switch>
          <Home exact path='/'/>
        </Switch>
        <Switch>
          <Invest exact path='/Invest'/>
        </Switch>
        <Switch>
          <Bank exact path='/Bank'/>
        </Switch>
        <Switch>
          <Education exact path='/Education'/>
        </Switch>
        <Switch>
          <LogIn exact path='/LogIn'/>
        </Switch>
        <Switch>
          <SignUp exact path='/SignUp'/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
