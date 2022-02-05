import timedcodingquiz from "./images/timed-coding-quiz.png";
import passwordGenerator from "./images/password-generator.png";

import health4u from "./images/health4u.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
    return (
        <div className="project">
            <div className="container">
                <div className="row align-items-center my-7">
                    <div className="col-lg-7">
                    <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Password Generator</h3>
                            <p>In this project, you will be able to generate a password given certain specifications.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/password-generator-august13"/>
                                <img src= "../images/passwordGenerator.png"  /* {passwordGenerator}  */alt="Screenshot of password generator webpage"/>
                                <a href="https://github.com/WafaMohessin/password-generator-august13"><FontAwesomeIcon icon={["fab", "github"]} /> </a>
                            </div>
                        </section>

                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>timed-coding-quiz</h3>
                            <p>In this project, javascript has been utilized to create timed coding quiz to challange your understanding in Javascript field.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/timed-coding-quiz"/>
                                <img src= "../images/ttimedCodeQuiz.png"  /* {timedCodeQuiz} */ alt="Screenshot of timedCodeQuiz webpage"/>
                                <a href="https://github.com/WafaMohessin/timed-coding-quiz"><FontAwesomeIcon icon={["fab", "github"]} /> </a>
                            </div>
                        </section>

                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>health4u</h3>
                            <p>In this project, I worked with my team to build app help people being healthy by instructing different type of exercises for all body part. The user can time thier workout and save thier physical progresses.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/health4u"/>
                                <img src= "../images/health4u.png" /*  {health4u}  */alt="Screenshot of health4u webpage"/>
                                <a href="https://github.com/WafaMohessin/health4u"><FontAwesomeIcon icon={["fab", "github"]} /> </a>
                            </div>
                        </section>
                        </div>
                </div>
            </div>   
        </div>
    )
}

export default Project



                      