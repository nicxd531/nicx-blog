import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}= useParams();
    const {data:blogs , error, isPending} = useFetch("http://localhost:7001/blogs/" + id)
    blogs && console.log(blogs)
    const navi =useNavigate()
    const handleClick =()=>{
        fetch("http://localhost:7001/blogs/" +blogs.id,{
            method:'DELETE'
        })
        .then(()=>{
            navi('/')})
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                   
                    <h2>{blogs.title}</h2>
                    <p>written by{blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;