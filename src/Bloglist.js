import { Link } from "react-router-dom";

const Bloglist = ({blogs,title, handleDelete}) => {
    
    return ( 
        <div className="mBlogList">
        <h2>{title}</h2>
        <div className="blog-list">
            
 
            {blogs.map((blogs)=> (
            <div className="blog-preview" key={blogs.id}>
                <Link to={`/blogs/${blogs.id}`}>
               
                
                <div>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                </div>
                </Link>
                
            </div>))}
            
            
        </div>
        </div>
     );
}
 
export default Bloglist;