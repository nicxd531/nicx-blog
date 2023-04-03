import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form1 from "./Form1";
import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';


const Create = () => {
    // states for every instance needed 
      const [title, setTitle]=useState('');
      const [body, setBody]=useState('');
      const [author, setAuthor]=useState('');
      const [blogCategory, setBlogCategory]=useState('React');

      const [date, setIsDate]=useState('');

      const [createArticle] = useMutation(gql`
      mutation {
        createBlog(
          data:{
            author: "John Doe",
            body: "Lorem ipsum dolor sit amet...",
            image: "https://example.com/my-image.jpg",
            date: "2022-03-31T15:25:00.000Z",
          }
        ){
          data{
            attributes{
            title
            author
            body
            image
            date,   
                
              }
          
            }
          }
        }
  `);

      const history = useNavigate();



      const handleSubmit =(e)=>{
        e.preventDefault()
        createArticle({ variables: { title, body} });
        
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
                // isPending={isPending}
                setIsDate={setIsDate}
                date1={date}
            />
        </div>

     );
}
 
export default Create;