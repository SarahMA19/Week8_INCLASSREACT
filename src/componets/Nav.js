import { useEffect } from "react";
import { Link } from "react-router-dom";


const Nav = props => {

  useEffect(() => {console.log('The Nav componet has rendered (or re-rendered)')});  
    return(
        <div>
            <nav className="navbar navbar-expand navbar-light bg-dark">
              <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to='/home'>Home</Link>
                <Link className="nav-item nav-link active" to='/shop'>Shop</Link>
                <Link className="nav-item nav-link active" to='/cart'>Cart</Link>
              </div>
              <span>{props.teachers[Math.floor(Math.random()*props.teachers.length)]}</span>
            </nav>
        </div>
    );
}


export default Nav;