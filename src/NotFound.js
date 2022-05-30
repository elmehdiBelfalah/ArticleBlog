import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not Found</h2>
            <p>Sorry that page cannot be found</p>
            <Link to='/'>Back home</Link>
        </div>

     );
}
 
export default NotFound;