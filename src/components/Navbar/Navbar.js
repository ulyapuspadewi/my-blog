import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../../styled/styled';
import { Fluid, Logo } from './styled';

// function component
const Navbar = () => {
    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    return (
        <Container>
            <Fluid className='navbar fixed-top navbar-expand-sm'>
               <span><Link to="/" style={logo}><Logo></Logo></Link></span>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className='navbar-nav me-auto'>
                        <li className={"nav-item" + (url === "/listPosts" ?" active" : "")}><Link to="/listPosts" aria-current="page">
Recipe Collection</Link></li>
                        <li className={"nav-item" + (url === "/contact" ?" active" : "")}><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </Fluid>
        </Container>
    )
}

export default Navbar

// inline css

const logo = {
    height: "auto",
    width: "150px",
    position: "absolute",
    top: "0",
    left: "2rem"
}
