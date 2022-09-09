import React from 'react';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from "./ProjectCard.jsx";
import projImg1 from "../../assets/img/Lesson-project.png";
import projImg2 from "../../assets/img/WalletControl-project.png";
import projImg3 from "../../assets/img/React-Project.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import './Projects.css';
import '../NavBar/NavBar.css'
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
            title: "Lesson",
            description: "An Online Study Plataform",
            imgUrl: projImg1,
            link: "https://lessonprojectphp.000webhostapp.com/login/index"
        },
    ];


    const projectHTML = [

        {
            title: "Wallet Control",
            description: "Control your balance.",
            imgUrl: projImg2,
            link: "https://github.com/akiojapa/WalletControl"
        },
    ];

    const projectPython = [

        {
            title: "DS-meta",
            description: "A fullstack website with React in Frontend calling an API created besides Java with framework SpringBoot.",
            imgUrl: projImg3,
            link: "https://dsmeta-matera.netlify.app/"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here is the main projects that i have maden for expand my knowledge in the software development, for more projects: <a href="https://github.com/akiojapa">GITHUB</a></p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 d-flex justify-content-center align-items-center">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">PHP FullStack</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">HTML/CSS/JS</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">React/Java-SpringBoot</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
            
                                                        )
                                                    })
                                                }
                                                <p>Still in working, the plataform Lesson is a another way for students learning, using the gamification.</p>

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                {
                                                    projectHTML.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                                A site made with Html/CSS/JS to manage the total of your money, being the entry or the expense.
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                {
                                                    projectPython.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                                <p>The project DS-meta consists in a list of sales and your sellers wich can notify a person by SMS(Just in my phone for now). </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;