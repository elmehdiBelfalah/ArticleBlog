import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id }= useParams();
    const {data : blogs,error,isPending}=useFetch('http://localhost:9000/blogs/'+id);
    const history=useHistory();
    const handleDelete=()=>{
        fetch('http://localhost:9000/blogs/'+blogs.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');

        })
    }

    return (  
         
        <div className="blog-details">
            {isPending && <div>
                Loading...
            </div>}
            {error && <div>
                {error}
            </div>}
            {blogs && <article>
                <h2>{blogs.tittle}</h2>
                <p>Written by {blogs.author}</p>
                <p>{blogs.body}</p>
                <button onClick={handleDelete}>Delete blog</button>
            </article>}
        </div>
        
    );
}
 
export default BlogDetails