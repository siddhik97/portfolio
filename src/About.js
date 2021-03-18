import './About.css';
import {FaAndroid, FaDatabase} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'
import profileImage from './profileimg.jpg';
import {GrSteps, GrCloudSoftware} from 'react-icons/gr'
import {GiArtificialIntelligence} from  'react-icons/gi'
import {MdWeb} from "react-icons/all";
import {SiSmartthings} from "react-icons/all"
import {VscSymbolArray} from "react-icons/all";

function About() {
    return (
        <section id="about" className="about">

            <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Learn more about me</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img  alt="No img" src={profileImage} className={"img-fluid"}/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Software Engineer</h3>
                        <p className="font-italic">

                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li> <IoIosArrowForward className={"icons"}/> <strong>Age:</strong> 23 </li>

                                    <li><IoIosArrowForward className={"icons"}/> <strong>Degree:</strong> Master of Science
                                    </li>
                                    <li><IoIosArrowForward className={"icons"}/> <strong>E-mail:</strong> siddhik@colostate.edu
                                    </li>
                                    <li><IoIosArrowForward className={"icons"}/> <strong>Job Status:</strong> Open for new opportunities
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li> <IoIosArrowForward className={"icons"}/> <strong>University:</strong> Colorado State University</li>
                                    <li><IoIosArrowForward className={"icons"}/> <strong>Department:</strong> Computer Science
                                    </li>
                                    <li><IoIosArrowForward className={"icons"}/> <strong>Address:</strong> Fort Collins, Colorado
                                    </li>

                                    <li><IoIosArrowForward className={"icons"}/> <strong>Hobbies:</strong> Travelling, Photography
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p>

                        </p>
                        <p className={"font-italic"}>
                            I am originally from Mumbai, India. Currently pursuing my master's degree at Colorado State University. I am a hard-working and reliable graduate student with a strong background and interest in developing efficient algorithms and software. I am  also a quick learner with a wide range of interests. I am
                            actively seeking new grad 2021 positions for SDE.

                        </p>
                    </div>
                </div>

            </div>

            <div className="skills container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0"
    aria-valuemax="100" style={{width: '100%'}}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0"
    aria-valuemax="100" style={{width: '90%'}}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">JavaScript <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                     aria-valuemax="100" style={{width: '75%'}}/>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="progress">
                            <span className="skill">Java <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar"  aria-valuenow={90}
    aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">Python <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                     aria-valuemax="100" style={{width: '75%'}}/>
                            </div>
                        </div>

                        <div className="progress">
                            <span className="skill">DataBase <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                     aria-valuemax="100" style={{width: '80%'}}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="interests container">

                <div className="section-title">
                    <h2>Interests</h2>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <MdWeb className={"icons"} style={{ color: "#47a5d0"}} />
                            <h3>Web Development</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <FaAndroid className={"icons"} style={{ color: "#48c84e"}}/>
                            <h3>Android</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <FaDatabase className={"icons"} style={{ color: "#945acd"}}/>
                            <h3>Big Data</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <SiSmartthings className={"icons"} style={{ color: "#c87f48"}}/>
                            <h3>Machine Learning</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <GiArtificialIntelligence className={"icons"} style={{ color: "#c84848"}}/>
                            <h3>Artificial Intelligence</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <GrCloudSoftware className={"icons icons-swe"} style={{ color: "#c87f48", fill: "white"}}/>
                            <h3>Software Development</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <VscSymbolArray className={"icons"} style={{ color: "#d9d242"}}/>
                            <h3>Data Structures</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <GrSteps className={"icons icons-algo"} style={{ color: "#d9d242"}}/>
                            <h3>Algorithms</h3>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default About;