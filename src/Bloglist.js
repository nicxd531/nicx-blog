import { Link } from "react-router-dom";

const Bloglist = ({blogs,title, handleDelete}) => {
    
    return ( 
        <div className="mBlogList">
        <h2>{title}</h2>
        <div className="blog-list">
            

           {blogs && blogs.map((blogs)=> (
            <div className="blog-preview" key={blogs.id}>
                <Link to={`/blogs/${blogs.id}`}>
               
                
                <div>
                <h2>{blogs.title}</h2>
                <p><em>written by</em> {blogs.author}</p>
                <p><em>Sub-category: </em>{blogs.blogCategory}</p>
                </div>
                </Link>
                
            </div>))}
            
            
        </div>
        </div>
     );
}
 
export default Bloglist;