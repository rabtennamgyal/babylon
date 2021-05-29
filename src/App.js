import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Home exact path='/' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
