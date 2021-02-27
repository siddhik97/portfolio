import './Resume.css';
import {FaRegSmile, FaFolder} from 'react-icons/fa'

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Check My Resume</p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Siddhi Santosh Kumar Kotian</h4>
                            <p><em>Hard-working and reliable graduate student in the department of Computer Science at Colorado State University with a
                                strong background and interest in Machine Learning and Big Data.</em></p>
                            <p>
                                <ul>
                                    <li>2226 West Elizabeth St., Fort Collins, CO</li>
                                    <li>(970) 215-8130</li>
                                    <li>siddhik@colostate.edu</li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Master of Science, Computer Science</h4>
                            <h5>2019 - Present</h5>
                            <p><em>Colorado State University, Fort Collins, CO</em></p>
                            <p> <strong><em>Current GPA - 3.83</em></strong></p>
                            <p>Completed coursework in Machine Learning, Big Data, Quantitative Analysis, Software Maintenance and Evolution,
                                Software Product and Process Evaluation</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Engineering, Information Technology</h4>
                            <h5>2015 - 2019</h5>
                            <p><em>University of Mumbai, Mumbai, India</em></p>
                            <p><strong><em>CGPA - 7.78/10</em></strong></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Machine Learning and Big Data Tutor</h4>
                            <h5>October 2020 - Present</h5>
                            <p><em>Colorado State University, Fort Collins, CO </em></p>
                            <p>
                                <ul>
                                    <li>Provide one-on-one tutoring sessions in Machine Learning and Big Data to graduate students.
                                    </li>
                                    <li>Stay informed about new resources and learning strategies as well as detailed information about tutoring
                                        subjects.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Software Development Intern</h4>
                            <h5>August 2018 - January 2019</h5>
                            <p><em>TechSkillsIT Consultants, Mumbai, India</em></p>
                            <p>
                                <ul>
                                    <li>Assisted a team of Java Developers in creating web applications according to the client's request.
                                    </li>
                                    <li>Worked with technologies such as Java Rest Web Services, Spring Boot, JPA,Hibernate.
                                    </li>
                                    <li>Developed the user interface of the application using technologies such as HTML, CSS, Bootstrap and AngularJS.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="resume-title">Certification</h3>
                        <div className="resume-item">
                            <h4>Oracle Certified Professional, Java Associate </h4>
                            <h5>July 2018</h5>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
}

export default Resume;