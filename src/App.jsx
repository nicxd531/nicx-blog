import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Blogdetails ';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient ,InMemoryCache, ApolloProvider } from '@apollo/client';

// apollo client for fetching the graphql data
const client = new ApolloClient({
  // the url graphql is using 
  uri: "https://nordic-rose-backend-production.up.railway.app/graphql",

  // the inMemoryCache in holds the data coming from apollo client 
  cache: new InMemoryCache()
});

function App() {
  // base for every components and re-direction 
  //apollo provider was added to allow the client variable to be availble every where in the project
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App ">
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
    </ApolloProvider>
  );
}

export default App;
