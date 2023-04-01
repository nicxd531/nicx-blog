import { useNavigate, useParams } from "react-router-dom";
import Loading from "./loading";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}= useParams();
    const {data:blogs , error, isPending} = useFetch("https://my-json-server.typicode.com/nicxd531/jsonS/blogs/" + id)
    blogs && console.log(blogs)
    const navi =useNavigate()
    const handleClick =()=>{
        fetch("https://my-json-server.typicode.com/nicxd531/jsonS/blogs" +blogs.id,{
            method:'DELETE'
        })
        .then(()=>{
            navi('/')})
    }
    return ( 
        <div className="blog-details">
            {isPending && <Loading/>}
            {error && <div className="err"><img src='/image/err404.png' alt="failed to fetch"/></div>}
            {blogs && (
                <article>
                   
                    <h2>{blogs.title}</h2>
                    <p><em>written by</em>{blogs.author}</p>
                    <p><em>Sub-category:</em> {blogs.blogCategory}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;