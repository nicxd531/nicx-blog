import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form1 from "./Form1";


const Create = () => {
    // states for every instance needed 
      const [title, setTitle]=useState('');
      const [body, setBody]=useState('');
      const [author, setAuthor]=useState('');
      const [blogCategory, setBlogCategory]=useState('React');
      const [isPending, setIsPending]=useState(false);
      const [date, setIsDate]=useState('');

      const history = useNavigate();



      const handleSubmit =(e)=>{
        e.preventDefault()
        
        const blog={title ,body,author,date};
         setIsPending(true);
         console.log(date)
         console.log(blog)
        
        fetch('https://nordic-rose-backend-production.up.railway.app/api/blogs', {
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
            
            <Form1
                handleSubmit={handleSubmit}
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                blogCategory={blogCategory}
                setBlogCategory={setBlogCategory}
                body={body}
                setBody={setBody}
                isPending={isPending}
                setIsDate={setIsDate}
                date1={date}
            />
        </div>

     );
}
 
export default Create;