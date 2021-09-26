import React from 'react';
import './css/Home.css';
import photo from './images/photo.png';
import { Container, Image } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return(
            <div id="home" className="home">
                <div>
                    <div className="intro">
                        <h1 className="fade-in">Hi, my name is </h1>
                        <h3 className="header fade-in delay-short">William San</h3>
                        <h4 className="fade-in delay-med">
                            I'm a software developer based on Toronto, Canada specializing in full-stack development
                        </h4>
                    </div>
                    <div className="animation">
                        <div className="ocean">
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <Container>
                        <h2>About Me</h2>
                        <div className="about-me">
                            <div>
                                <p>
                                    Hey, my name is William! I'm a <b>Computer Science</b> specialist in my final year at the <b>University of Toronto</b>.
                                </p>
                                <p>
                                    I am very passionate about <b>web development</b>, I love designing and developing applications. I am always excited to take on projects and create something new!
                                </p>
                                <p>
                                    In my previous 16 month internship, I worked at Bayer as a <b>software developer</b>.
                                </p>
                            </div>
                            <Image src={photo} className="rounded-corners shade center"/>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Home;