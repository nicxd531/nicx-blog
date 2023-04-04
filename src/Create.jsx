import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form1 from "./Form1";



const Create = () => {
    // states for every instance needed 
      const [title, setTitle]=useState("");
      const [body, setBody]=useState("");
      const [author, setAuthor]=useState( "");
      const [blogCategory, setBlogCategory]=useState('React');
      const [date, setIsDate]=useState("");
      const [data, setData]=useState(null);
     
      

      // variable to get previous history 
      const history = useNavigate();

      // Define the URL for your Strapi instance and the content type you want to create a post for
      const apiUrl = 'https://nordic-rose-backend-production.up.railway.app/api/blogs';
     
      
      // Define the data for your new post
      
        


        var mainData = {
     
          data: {
          title: title.toString(),
        body: body.toString(),
        author: author.toString(),
        date: date.toString()
          }
        };

      const handleSubmit =(e)=>{
        e.preventDefault()
        setData(mainData)

         console.log(data)

        data && setTimeout(() => {


  
        // Use the fetch API to make a POST request to create a new post
           fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(data => {
              // Do something with the data, such as displaying a success message
              console.log('Post created successfully:', data);
            })
            .catch(error => {
              // Handle any errors that occur during the request
              console.error(error);
            });
            
        

        // last history 
         history('/');
        // Reload the current page
     window.location.reload();
    }, 5000); // Wait for 5 seconds before executing the code
  

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
                // isPending={isPending}
                setIsDate={setIsDate}
                date1={date}
            />
        </div>

     );
}
 
export default Create;