import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import NavMobile from './component/NavMobile'
import Home from './component/Home'
import Modal from './component/Modal'
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

  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  return (
    <Router>
      <div className='app'>
        <Navbar openNav={openNav} openModal={openModal} />
        {nav && <NavMobile closeNav={closeNav} />}
        <Switch>
          <Modal exact path='/Modal'/>
        </Switch>
        <Switch>
          <Home exact path='/' openModal={openModal} />
        </Switch>
        <Switch>
          <Invest exact path='/Invest' openModal={openModal} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
