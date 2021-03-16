import './Projects.css';
import {RiProfileFill, RiEmotionLaughFill} from 'react-icons/ri'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {VscLoading} from 'react-icons/vsc'
import {GrNetwork} from 'react-icons/gr'
import {GiTicTacToe} from 'react-icons/gi'

function Projects() {
    return (
        <section id="portfolio" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Projects</h2>
                    <p>My Projects</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="icon-box">
                            <div className="icon"><RiProfileFill className={"icons"}/></div>
                            <h4><a href="https://siddhik97.github.io/profile/">Profile Card</a></h4>
                            <p>A profile card, displaying basic GitHub statistics using HTML, CSS and JavaScript.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="icon"><TiWeatherPartlySunny className={"icons"}/></div>
                            <h4><a href="https://siddhik97.github.io/weather-app/">Weather App</a></h4>
                            <p>A web app that displays the temperature of a specific region based on search query using React.</p>
                            <br/>
                            <p><em><strong>Collaborated with: </strong><a href={'http://www.dhruvpadalia.com/'}>Dhruv Padalia</a></em></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="icon-box">
                            <div className="icon"><VscLoading className={"icons"}/></div>
                            <h4><a href="https://siddhik97.github.io/coming-soon/">Coming Soon Page</a></h4>
                            <p>A coming soon web page displaying a timer essentially developed to work with CSS transitios.</p>
                            <br/>
                            <p><em><strong>Collaborated with: </strong><a href={'http://www.dhruvpadalia.com/'}>Dhruv Padalia</a></em></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><RiEmotionLaughFill className={"icons"}/></div>
                            <h4><a href="">Facial Emotion Detection</a></h4>
                            <p> Implemented a CNN model to detect various facial emotion in an image
                                dataset.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><GiTicTacToe className={"icons"}/></div>
                            <h4><a href="">Tic Tac Toe simulation</a></h4>
                            <p>Worked with Q-learning to predict Q functions
                                for Player X and for Player O in a simple Tic Tac Toe game</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><GrNetwork className={"icons"}/></div>
                            <h4><a href="">Neural Networks</a></h4>
                            <p> Implemented a neural network class in PyTorch and applied on three
                                different datasets to perform regression and classification on the data and displayed the results using violin plots.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Projects;