import React from 'react';
import './css/Home.css';
import photo from './images/photo.png';
import { Container, Image } from 'react-bootstrap';

class AboutMe extends React.Component {
    render() {
        return(
            <div id="about" className="about-section">
                    <Container>
                        <div className="animation">
                            <div className="ocean">
                                <div className="wave"></div>
                                <div className="wave"></div>
                                <div className="wave"></div>
                            </div>
                        </div>
                        <h2>About Me</h2>
                        <div className="about-me">
                            <div>
                                <p>
                                    Hey, my name is <b>William San</b>! I'm a <b>Computer Science</b> specialist in my final year at the <b>University of Toronto</b>.
                                </p>
                                <p>
                                    I love developing and designing software for the web, from simple landing pages to progressive web applications!
                                    My main area of interest is <b>full stack development</b> and I have experience working with a large variety of technologies and frameworks.
                                    I am always excited to take on new projects and create software that provides the best user experience.
                                </p>
                                <p>
                                    In my previous 16 month internship, I worked at Bayer as a <b>software developer</b>, building digital interfaces for Radiologists.
                                </p>
                            </div>
                            <a href="https://www.linkedin.com/in/william-san" className="center" target="_blank" rel="noreferrer">
                                <Image src={photo} className="rounded-corners shade center img-hover"/>
                            </a>
                        </div>
                    </Container>
                </div>
        );
    }
}

export default AboutMe;