import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const scrollNav = () => {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className='nav-items'>
        <div className='logo'>
          {/*<Link to='/'>Plants</Link>*/}
          <Link to='/'>
            <span>P</span>
            <span>L</span>
            <span>A</span>
            <span>N</span>
            <span>T</span>
            <span>S</span>
          </Link>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          role='button'
          className={toggle ? "menu active" : "menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={toggle ? "nav-links active" : "nav-links"}>
          <Link to='/' onClick={() => setToggle(!toggle)}>
            Home
          </Link>
          <Link to='/about' onClick={() => setToggle(!toggle)}>
            About
          </Link>
          <Link to='/gallery' onClick={() => setToggle(!toggle)}>
            Gallery
          </Link>
          <Link to='/services' onClick={() => setToggle(!toggle)}>
            Services
          </Link>
          <Link to='/blogs' onClick={() => setToggle(!toggle)}>
            Blogs
          </Link>
          <Link to='/contact' onClick={() => setToggle(!toggle)}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
