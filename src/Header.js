import logo from './logo.svg';
import './Header.css';
import {FaGithub, FaPinterest, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Header() {
    return (
        <header id="header" className="header-tops">
            <div className="container">

                <h1><a href="index.html">Siddhi Kotian</a></h1>

                <h2>I'm a passionate <span>software developer</span>, currently residing in Fort Collins.</h2>

                <nav className="nav-menu d-lg-block">
                    <ul>
                        <li className="active"><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#portfolio">Projects</a></li>
                        {/*<li><a href="#contact">Contact</a></li>*/}
                    </ul>
                </nav>

                <div className="social-links">
                    <a href="https://github.com/siddhik97" className="github icons"><FaGithub/></a>
                    <a href="https://www.pinterest.com/siddhik97/" className="facebook icons"><FaPinterest/></a>
                    <a href="https://www.instagram.com/siddhik097/" className="instagram icons"><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/siddhikotian/" className="linkedin icons"><FaLinkedin/></a>
                </div>

            </div>
        </header>
    );
}

export default Header;