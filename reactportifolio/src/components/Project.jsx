import TimedCodeQuiz from "./../images/timedCodeQuiz.png";
import WeatherApp from "./../images/WeatherApp.png";
import PasswordGenerator from "./../images/passwordGenerator.jpg";
import DailyPlanner from "./../images/DailyPlanner.png";
import FitnessTracker from "./../images/FitnessTracker.png";
import Health4u from "./../images/health4u.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project() {
    return (
        <div className="project">
            <div className="container">
                <div className="row align-items-center my-7">
                    <div className="col-lg-7">
                    <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Password Generator <a href="https://github.com/WafaMohessin/password-generator-august13"><FontAwesomeIcon icon={["fab", "github"]} /></a> </h3>
                            <p>In this project, you will be able to generate a password given certain specifications.</p>
                            <a href="https://github.com/WafaMohessin/password-generator-august13"/>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/password-generator-august13"/>
                                <img src= {PasswordGenerator} alt="Screenshot of password generator webpage"/>
                               
                            </div>
                        </section>

                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Weather App <a href="https://github.com/WafaMohessin/weather-dashboard"><FontAwesomeIcon icon={["fab", "github"]} /> </a> </h3>
                            <p>In this project, I created weather app which lets the user to check the 5-day weather forcast for any given city</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/weather-dashboard"/>
                                <img src= {WeatherApp} alt="Screenshot of health4u webpage"/>
                            </div>
                        </section>


                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Timed Code Quiz  <a href="https://github.com/WafaMohessin/timed-coding-quiz"><FontAwesomeIcon icon={["fab", "github"]} /> </a> </h3>
                            <p>In this project, javascript has been utilized to create timed coding quiz to challange your understanding in Javascript field.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/timed-coding-quiz"/>
                                <img src= {TimedCodeQuiz} alt="Screenshot of timedCodeQuiz webpage"/>
                            </div>
                        </section>

                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Daily Planner <a href="https://github.com/WafaMohessin/daily-planner-homework"><FontAwesomeIcon icon={["fab", "github"]} /> </a> </h3>
                            <p>In this project, javascript has been utilized to create timed coding quiz to challange your understanding in Javascript field.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/daily-planner-homework"/>
                                <img src= {DailyPlanner} alt="Screenshot of timedCodeQuiz webpage"/>
                            </div>
                        </section>

                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>Fitness Tracker <a href="https://github.com/WafaMohessin/fitnessTracker"><FontAwesomeIcon icon={["fab", "github"]} /> </a> </h3>
                            <p>In this project, I worked on a project for tracking workout goal. User can use this app to choose the type of exercises, workout, and track their progress</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/fitnessTracker"/>
                                <img src= {FitnessTracker} alt="Screenshot of timedCodeQuiz webpage"/>
                            </div>
                        </section>



                        <section className="showcase-right">
                        <div className="showcase-right-text">
                            <h3>health4u <a href="https://github.com/WafaMohessin/health4u"><FontAwesomeIcon icon={["fab", "github"]} /> </a> </h3>
                            <p>In this project, I worked with my team to build app help people being healthy by instructing different type of exercises for all body part. The user can time thier workout and save thier physical progresses.</p>
                            </div>

                            <div className="showcase-right-img">
                                <a href="https://github.com/WafaMohessin/health4u"/>
                                <img src= {Health4u} alt="Screenshot of health4u webpage"/>
                            </div>
                        </section>
                        </div>
                </div>
            </div>   
        </div>
    )
}

export default Project



                      