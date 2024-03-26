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
                                    Hey, my name is <b>William San</b>! I am a recent graduate from the <b>University of Toronto</b> specializing in <b>Computer Science</b>.
                                </p>
                                <p>
                                    I love developing and designing software for the web, from simple landing pages to progressive web applications!
                                    My main area of interest is <b>full stack development</b> and I have experience working with a large variety of technologies and frameworks.
                                    I am always excited to learn more, take on new projects and create software that provides the best user experience.
                                </p>
                                <p>
                                    I am currently working as a <b>Software Engineer</b> at Meta on the Core Health Data Infrastructure Team. Previously, I worked at Scotiabank as a <b>Cloud Data Engineer</b>, developing a Data Provisioning and Access Management app. In my previous <b>software engineer</b> internships at Meta, Apollo GraphQL and Bayer, I created tools for Facebook Business Growth, developed a commercial SaaS for modern application development and built digital interfaces for Radiologists.
                                </p>
                            </div>
                            <a href="https://www.linkedin.com/in/william-san" className="center" target="_blank" rel="noreferrer">
                                <Image src={photo} className="rounded-corners shade center img-hover headshot"/>
                            </a>
                        </div>
                    </Container>
                </div>
        );
    }
}

export default AboutMe;