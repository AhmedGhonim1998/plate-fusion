    import React, { useState, useEffect } from 'react';
    import { Container, Button } from 'react-bootstrap';
    import { Link, NavLink } from 'react-router-dom';
    import logo from '../image/logo.png';

    const Nav = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    const scrollUp = () => {
        window.scroll(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
        {/************************ header top start ***************************************/}
        <div className="header-top d-md-none">
            <Container>
            <div className="header-top-area">
                <NavLink to="/sign-up" className="text-capitalize lab-btn me-3 text-decoration-none">
                <span>create account</span>
                </NavLink>
                <NavLink to="/login" className="text-capitalize text-decoration-none">
                login
                </NavLink>
            </div>
            </Container>
        </div>
        {/********************************** header bottom ***********************************/}
        <div className="header-bottom">
            <Container>
            <div className="header-wrapper d-flex justify-content-between align-items-center">
                {/** logo **/}
                <div className="logoNavBar">
                <Link to="/">
                    <img src={logo} alt="img" />
                </Link>
                </div>

                {/* Centered Menu Area */}
                <div className="menu-area d-flex justify-content-center align-items-center flex-grow-1">
                <div className="menu">
                    <ul className={`lab-ul d-flex justify-content-center ${menuToggle ? 'active' : ''}`}>
                    <li onClick={scrollUp} className='me-4 pe-3'>
                        <Link to="/" className="text-capitalize text-decoration-none" onClick={() => setMenuToggle(false)}>
                        home
                        </Link>
                    </li>
                    <li onClick={scrollUp} className='me-4 pe-3'>
                        <Link to="/shop" className="text-capitalize text-decoration-none" onClick={() => setMenuToggle(false)}>
                        videos
                        </Link>
                    </li>
                    <li onClick={scrollUp} className='me-4 pe-3'>
                        <Link to="/blog" className="text-capitalize text-decoration-none" onClick={() => setMenuToggle(false)}>
                        history
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>

                {/* Contact Us Button */}
                <Button className="text-capitalize btnContact ms-3" variant="primary">
                contact us
                </Button>

                {/* Menu Toggler */}
                <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar headerBar ms-3 d-lg-none ${menuToggle ? 'active' : ''}`}
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            </Container>
        </div>
        </header>
    );
    };

    export default Nav;
