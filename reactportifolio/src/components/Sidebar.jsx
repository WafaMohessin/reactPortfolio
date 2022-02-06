import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        
        <div className="side-bar">
            
            <img src="https://avatars.githubusercontent.com/u/87388655?v=4" alt="Wafa Avatar Picture" />
            <div className="sidebar-text">
                <p className="mainName">Wafa Mohessin</p>
                <p>Front-end/Back-end</p>
                <p>Web Application Developer</p>
            </div>
            <div className="contact-icons">
                <p>Get in Touch</p>
                <a href="mailto:wafamohessin@gmail.com"> <FontAwesomeIcon icon="envelope" /></a>
                <a href="https://www.linkedin.com/in/wafa-mohessin-7145a047/"> <FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href="https://github.com/WafaMohessin"><FontAwesomeIcon icon={["fab", "github"]} /></a>
            </div>
           
        </div>
        
    )
}

export default Sidebar;