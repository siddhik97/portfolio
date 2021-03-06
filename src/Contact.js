import './Contact.css';
import {FaRegSmile, FaFolder} from 'react-icons/fa'

function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Contact Me</p>
                </div>

                <div className="row mt-2">

                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-map"></i>
                            <h3>My Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-share-alt"></i>
                            <h3>Social Profiles</h3>
                            <div className="social-links">
                                <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                                <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                                <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="icofont-skype"></i></a>
                                <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Me</h3>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Me</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;