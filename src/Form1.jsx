import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Form1 = ({handleSubmit,title,setTitle,author,setAuthor,blogCategory,setBlogCategory,body,setBody,isPending}) => {

    return ( 
        <form onSubmit={handleSubmit}>
  
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

                <Form.Select 
                className="mt-4"
                value={blogCategory}
                onChange={(e)=>setBlogCategory(e.target.value)}
                aria-label="Default select example">
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Html">Html</option>
                    <option value="Css">Css</option>
                    <option value="BootStrap">BootStrap</option>
                    <option value="Git">Git</option>
                    <option value="Github">Github</option>
                </Form.Select>

                <div>
                    <label>other categories</label>
                    <div key={`inline-checkbox`} className="d-flex flex-row "  onChange={(e)=>setBlogCategory(e.target.value)}>
                        <Form.Check
                            className="d-flex  justify-content-around ms-3 align-items-center"
                            inline
                            label="React"
                            name="group1"
                            value="React"
                            type="checkbox"
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            className="d-flex justify-content-center ms-2 align-items-center"
                            inline
                            label="Javascript"
                            name="group1"
                            value="Javascript"
                            type="checkbox"
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            className="d-flex justify-content-center ms-2 align-items-center"
                            inline
                            value="Html"
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
                            value="Css"
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