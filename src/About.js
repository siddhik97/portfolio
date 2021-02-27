import './About.css';
import {FaRegSmile, FaFolder} from 'react-icons/fa'
import {IoIosArrowForward} from 'react-icons/io'

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
                        <img  alt="" src={"profile.jpg"}/>
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
                            I am originally from Mumbai, India. Currently pursuing my master's degree at Colorado State University. I am a quick learner with a wide range of interests.

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
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <h3>Lorem Ipsum</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <h3>Dolor Sitema</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <h3>Sed perspiciatis</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div className="icon-box">
                            <h3>Sed perspiciatis</h3>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default About;