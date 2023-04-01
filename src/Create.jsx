import { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import Form1 from "./Form1";


const Create = () => {
    // states for every instance needed 
      const [title, setTitle]=useState('');
      const [body, setBody]=useState('');
      const [author, setAuthor]=useState('');
      const [blogCategory, setBlogCategory]=useState('React');
      const [isPending, setIsPending]=useState(false);
      const [Date, setIsDate]=useState("");

      const history = useNavigate();

    //   moment.js library used for getting present time inwhich the blog was sent 
      const nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');

      console.log(nowDate)

      const handleSubmit =(e)=>{
        e.preventDefault()
        setIsDate(nowDate)
        const blog={title ,body,author, blogCategory,Date};
         setIsPending(true);
        
        fetch('https://my-json-server.typicode.com/nicxd531/jsonS/blogs', {
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
            />
        </div>

     );
}
 
export default Create;