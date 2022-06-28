import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [tittle,setTittle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('');
    const[isPanding,setIsPanding]=useState(false);
    const history =useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
    const blog ={tittle,body,author}
    setIsPanding(true);
    fetch('http://localhost:9000/blogs',{
        method:'POST',
        headers:{"Content-Type":"Application/json"},
        body: JSON.stringify(blog)
    }).then(()=>{
            console.log('blog added')
            setIsPanding(false);
            setAuthor('');
            setBody('');
            setTittle('');
            history.push('/');
    })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input type="text" required value={tittle} onChange={(e)=>setTittle(e.target.value)}></input>
                <label>Blog body : </label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author : </label>
                <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option></option>
                    <option value='Ma7do'>Ma7do</option>
                    <option value='Mehdi'>Mehdi</option>
                    <option value='Belfalah'>Belfalah</option>
                </select>
                {!isPanding &&<button>ADD Blog</button>}
                {isPanding &&<button disabled>Adding Blog ...</button>}
            </form>


        </div>

     );
}
 
export default Create;