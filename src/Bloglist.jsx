import { Link } from "react-router-dom";
// useQuery is a hook used to send query to to the graphql sever ,while gql is used to transform the blogs to useable data


const Bloglist = ({title,blogs1}) => {



    return ( 
        <div className="mBlogList">
        <h2>{title}</h2>
        <div className="blog-list">
            
           {blogs1.blogs.data && blogs1.blogs.data.map((blogs)=> {
            
           return( 
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                        <div>
                            <h2>{blogs.attributes.title}</h2>
                            <p><em>written by</em> {blogs.attributes.author}</p>
                            <div>
                            <p><em className="me-2">Sub-category: </em>{blogs.blogCategory}
                            {blogs.attributes.categories.data.map((categories,index)=>{
                                return <span key={index} className="me-2">{categories.attributes.name}</span>
                            })}
                                </p>
                            </div>
                                
                        </div>
                    </Link>
                </div>
            )})}
            
            
        </div>
        </div>
     );
}
 
export default Bloglist;