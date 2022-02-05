import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <div className="side-bar">
            <img src="https://avatars.githubusercontent.com/u/87388655?v=4" alt="Wafa Avatar Picture" />
            <div className="sidebar-text">
                <p>Wafa Mohessin</p>
                <p>Front-End/ Back-End Web Application Developer</p>
            </div>
            <div className="contact-icons">
                <p>GET IN TOUCH</p>
                <a href="mailto:wafamohessin@gmail.com"> <FontAwesomeIcon icon="envelope" /></a>
                <a href="https:https://www.linkedin.com/in/wafa-mohessin-7145a047/"> <FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href="https:https://github.com/WafaMohessin"><FontAwesomeIcon icon={["fab", "github"]} /></a>
            </div>
           
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="assets/docs/resume.pdf" target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>     
        </div>
    )
}

export default Sidebar;