import './App.css';

import Apod from './components/Apod';
import Omdb from './components/Omdb';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <div>
          <nav className="navbar">
            <h1 className="header-h1"> REACT API Project </h1>
            <Link className="link" to="/react-demo">OMDb</Link>{' '}
            <Link className="link" to="/apod">APOD</Link>{' '}
            </nav>
            <Switch>
              <Route exact path="/react-demo" component={Omdb} />  
              <Route path="/apod" component={Apod} />
            </Switch>
          </div>
        </BrowserRouter>
      
    </div>
    
  );
}

export default App;
