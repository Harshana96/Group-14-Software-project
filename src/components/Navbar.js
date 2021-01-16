import { Button } from './Button';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else {
            setButton(true)
        }
    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);




    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    SelfQ <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/products' className='nav-link' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>

                    <li id='login' className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>

                    <li id='signup' className='nav-item'>
                        <Link to='/signup' className='nav-link' onClick={closeMobileMenu}>
                            Get Start
                        </Link>
                    </li>

                </ul>

                <Link to='/Login'>{button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                </Link>

            </div>
        </nav>
        
        </>
    );
}

export default Navbar;