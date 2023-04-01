import { Link } from "react-router-dom";
const Navbar = () => {
    // basic html and bootstrap for navBar
    return (
        <nav className="navbar p-2">
            <h1>Nicx Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
} 
export default Navbar