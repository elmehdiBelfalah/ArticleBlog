import './App.css';
import Navbar from './NavBar';
import Home from './Home'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
   
  return (
    <Router>
      <div className="App">
      <Navbar/>
     <div className='content'>  
       <Switch>
         <Route exact path='/'>
           <Home/> 
         </Route>
         <Route exact path='/Create'>
           <Create/>
         </Route>
         <Route exact path='/blogs/:id'>
           <BlogDetails/>
         </Route>
         <Route exact path='*'>
           <NotFound/>
         </Route>
       </Switch>
     </div>
    </div>
    </Router>
    
  );
}

export default App;
