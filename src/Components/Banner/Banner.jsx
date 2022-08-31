import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerimg from "../../assets/img/astronaut.png"
import { BsFillArrowRightCircleFill,BsFillBrushFill } from 'react-icons/bs';
import './Banner.css'
import TrackVisibility from 'react-on-screen';
 
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Fullstack Web Developer","Freelancer", "A Dev with dreams"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Akio Matera, how are you?`} <br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer Fullstack","" ]'><span className="wrap">{"</>  "}{text}</span></span></h1>
                <p>A developer with the objective of ever evolve your abilities, accepting all kind of challenges and principally your difficulties
                    <br />
                    <br />
                    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.(Martin Luther King)"
                </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <BsFillArrowRightCircleFill size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerimg} alt="Header Img" className="astronaut"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;