import { useNavigate, useParams } from "react-router-dom";
import Loading from "./loading";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}= useParams();
    const {data:blogs , error, isPending} = useFetch("https://nordic-rose-backend-production.up.railway.app/api/blogs/" + id)
    blogs && console.log(blogs.data.id)
    const navi =useNavigate()
    const handleClick =()=>{
        fetch("https://nordic-rose-backend-production.up.railway.app/api/blogs/" +blogs.data.id,{
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
                    <img src={blogs.data.attributes.image} alt="cup in water" width="300" height="600"s/>
                    <h2>{blogs.data.attributes.title}</h2>
                    <p><em>written by</em>{blogs.data.attributes.author}</p>
                    {/* <p><em>Sub-category:</em> {blogs.blogCategory}</p> */}
                    <div>{blogs.data.attributes.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;