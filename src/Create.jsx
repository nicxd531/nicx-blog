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
      const [isLoading, setIsLoading] = useState(false);
      const [checkedValues, setCheckedValues] = useState([]);
      const [imageFile, setImageFile] = useState(null);

      // variable to get previous history 
      const history = useNavigate();

      // Define the URL for your Strapi instance and the content type you want to create a post for
      const apiUrl = 'https://nordic-rose-backend-production.up.railway.app/api/blogs';
     
      
      // Define the data for your new post

      const handleCheckboxChange = (event) => {
        const value = Number(event.target.value); // convert to number
        const checked = event.target.checked;
        
        if (checked) {
          // check if value already exists in array
          if (!checkedValues.includes(value)) {
            setCheckedValues([...checkedValues, value]); // add to array
          }
        } else {
          const newValues = checkedValues.filter((item) => item !== value); // remove from array
          setCheckedValues(newValues);
        }
      };
        var mainData = {
          data: {
          title: title.toString(),
        body: body.toString(),
        author: author.toString(),
        date: date.toString(),
        categories: checkedValues, // an array of category IDs
          }
        };


    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
    
      // fixed the double click issue by passing main data directly rather than setting data using state
      fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mainData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {

        // Do something with the data, such as displaying a success message
        console.log('Post created successfully:', data);
        setIsLoading(false);

        // go back to previous page 
        history('/');

        // Reload the current page
        window.location.reload();
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
    };
  console.log(checkedValues)
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            
            <Form1
              checkedValues={checkedValues}
              handleCheckboxChange={handleCheckboxChange}
              handleSubmit={handleSubmit}
              title={title}
              setTitle={setTitle}
              author={author}
              setAuthor={setAuthor}
              blogCategory={blogCategory}
              setBlogCategory={setBlogCategory}
              body={body}
              setBody={setBody}
              isPending={isLoading}
              setIsDate={setIsDate}
              date1={date}
              setImageFile={setImageFile}
            />
        </div>

     );
}
 
export default Create;