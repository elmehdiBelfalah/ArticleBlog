import { useState,useEffect } from "react";
import BlogList from "./blog-list";
import useFetch from "./useFetch";


const Home = () => {
      
     const{data : blogs,error,isPending}=useFetch('http://localhost:9000/blogs')
    
    return ( 
        <div className="Home">
            {isPending &&<div>loading</div>}
            {error && <div>{error}</div> }
         {blogs  &&  <BlogList blogs={blogs} />   }
        </div>
     );
}
 
export default Home;
