import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        
        <nav className="navbar">
            <h1 id="id">Article-Blog</h1> 
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create">New blog</Link>
                <Link to="/About">About Us</Link>
                
            </div>
        </nav>
      );
}
  

export default Navbar;