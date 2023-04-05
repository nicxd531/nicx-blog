import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import moment from "moment/moment";

const Form1 = ({handleSubmit,title,setTitle,author,setAuthor,body,setBody,isPending,setIsDate,date1,handleCheckboxChange,checkedValues,setImageFile}) => {

//   moment.js library used for getting present time inwhich the blog was sent 
const nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    return ( 
        <form onSubmit={handleSubmit}>
            <h1 className='mb-5'>{nowDate}</h1>
                <FloatingLabel
                controlId="floatingInput"
                label="Blog Title"
                className="mb-4"
                >
                    <Form.Control 
                    required 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    type="text" 
                    placeholder="blog title" />
                </FloatingLabel>
                <FloatingLabel
                controlId="floatingInput"
                label="Author"
                className="mb-4"
                >
                    <Form.Control 
                    required 
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    type="text" 
                    placeholder="blog title" />
                </FloatingLabel>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control
                     type="file" 
                     size="sm" 
                     onChange={(e)=>setImageFile(e.target.value)}
                     />
                </Form.Group>
                <input 
                    required
                    value={date1}
                    onChange={(e)=>setIsDate(e.target.value)}
                    type='date'
                />
                <div>
                    <label>categories</label>
                    <div key={`inline-checkbox`} className="d-flex flex-row " onChange={handleCheckboxChange}>
                        <Form.Check
                            className="d-flex  justify-content-around ms-3 align-items-center"
                            inline
                            label="React"
                            name="group1"
                            value="1"
                            type="checkbox"
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            className="d-flex justify-content-center ms-2 align-items-center"
                            inline
                            label="Javascript"
                            name="group1"
                            value="2"
                            type="checkbox"
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            className="d-flex justify-content-center ms-2 align-items-center"
                            inline
                            value="3"
                            label="Html"
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-3`}
                        />
                        <Form.Check
                            className="d-flex justify-content-center ms-2 align-items-center"
                            inline
                            label="Css"
                            name="group1"
                            value="4"
                            type="checkbox"
                            id={`inline-checkbox-3`}
                        />
                    </div>
                </div>
                <FloatingLabel className="mt-4" controlId="floatingTextarea2" label="blog body">
                    <Form.Control
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    as="textarea"
                    placeholder="Blog Body"
                    style={{ height: '200px' }}
                    />
                </FloatingLabel>
                {!isPending && <button className="btn"> Add Blog </button>}
                {isPending && <button  className="btn" disabled> Adding blog.... </button>}
            </form>
     );
}
 
export default Form1;