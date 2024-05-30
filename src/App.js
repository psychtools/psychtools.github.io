import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Tests from './components/Tests.js';
import UnderConstruction from './components/UnderConstruction.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal"><Link class="navbar-brand no-underline text-white" to="/vmc">VMC Hub</Link></h5>
        <nav class="my-2 my-md-0 mr-md-3">        
          <Link class="p-2 text-white" to="/vmc/tests">Tests</Link>
          <Link class="p-2 text-white" to="/vmc/oops">Categories</Link>
          <Link class="p-2 text-white" to="/vmc/oops">Authors</Link>
          <Link class="p-2 text-white" to="/vmc/oops">Newsroom</Link>
        </nav>
        <a class="btn btn-warning" href="/vmc/oops">Sign in</a>
      </div>
      <Routes>
          <Route exact path="/vmc" element={<Main/>} />
          <Route exact path="/vmc/tests" element={<Tests/>} />
          <Route exact path="/vmc/oops" element={<UnderConstruction/>} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
