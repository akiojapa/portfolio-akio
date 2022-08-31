import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/php-logo.png";
import './About.css';
import TrackVisibility from 'react-on-screen';

const About = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <section className="contact" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>About me</h2>
                                    <Row className="about-row">
                                        <Col className="about-col">
                                        <div className="about">
                                            <span>My first contact with the world of software development it's when i had 16 years old, i study everyday since then with the objective for evolving my abilities and techniques.
                                                <br />
                                                <br />
                                                Currently i work in the area of infrastructure of network, here i acquired how principal skill the networking and cooperation. So do i understood what area of IT match with my personality, profissional, and in this moment, my dream.
                                                <br />
                                                <br />
                                                Today i have one objective for now, that objective consists in the first step become a developer, job which i'm giving hard to conquer and ready for accepting new challenges and strive even more.
                                            </span>
                                        </div>
                                        </Col>
                                    </Row>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;