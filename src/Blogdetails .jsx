import { useNavigate, useParams } from "react-router-dom";
import Loading from "./loading";
import useFetch from "./useFetch";
import { useQuery, gql } from '@apollo/client';


const BlogDetails = () => {

    const BLOG = gql`
        query GetBlog($id: ID!) {
        blog(id: $id) {
            data{
            id
            attributes{
                date,
                author,
                title,
                body,
                image{
                data{
                    attributes{
                    url
                    }
                }
                },
                categories{
                data{
                    attributes{
                    name
                    }
                }
                }
            }
            }
        }
        }`

    const {id}= useParams();

    const { loading:isPending, error, data:blog } = useQuery(BLOG,{
            variables:{id: id}
    })
    // const {data:blogs , error, isPending} = useFetch("https://nordic-rose-backend-production.up.railway.app/api/blogs/" + id)
    blog && console.log(blog.blog.data)
    const navi =useNavigate()


    const handleClick =()=>{
        fetch("https://nordic-rose-backend-production.up.railway.app/api/blogs/" +blog.blog.data.id,{
            method:'DELETE'
        })
        .then(()=>{
            navi('/')})
    }
    return ( 
        <div className="blog-details">
            {isPending && <Loading/>}
            {error && <div className="err"><img src='/image/err404.png' alt="failed to fetch"/></div>}
            {blog && (
                <article>
                    { <img src={`https://nordic-rose-backend-production.up.railway.app${blog.blog.data.attributes.image.data.attributes.url}`} alt="cup in water" width="300" height="600"s/> }
                    <h2>{blog.blog.data.attributes.title}</h2>
                    <p><em>written by: </em>{blog.blog.data.attributes.author}</p>
                    {blog.blog.data.attributes.categories.data.map((data)=>{
                        return(
                            <h5>{data.attributes.name}</h5>
                        )
                    })}
                    <div>{blog.blog.data.attributes.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;