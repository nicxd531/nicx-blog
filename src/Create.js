import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
      const [title, setTitle]=useState('');
      const [body, setBody]=useState('');
      const [author, setAuthor]=useState('mario');
      const [isPending, setIsPending]=useState(false);
      const history = useNavigate();

      const handleSubmit =(e)=>{
        e.preventDefault()
        const blog={title ,body, author};
         setIsPending(true);
        
        fetch(' http://localhost:7001/blogs', {
            method:'POST',
            headers: {"content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added');
            setIsPending(false)
        })
        history('/');

      }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                type="text"
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog category</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                 >
                    <option value="technology">technology</option>
                    <option value="facts">facts</option>
                    <option value="love">love</option>
                    <option value="animals">animals</option>
                    <option value="reality">reality</option>
                    <option value="movies">movies</option>
                </select>
                {!isPending && <button> Add Blog </button>}
                {isPending && <button disabled> Adding blog.... </button>}
                
            </form>

        </div>

     );
}
 
export default Create;