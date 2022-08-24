import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Blogdetails ';
import Footer from './footer';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/create' element={<Create/>}></Route>
              <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
            </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
