import React from 'react';
import { Container } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';
import './css/Home.css';

class Home extends React.Component {
    render() {
        return(
            <div id="home">
                <Container>
                    <div className="intro">
                        <div className="header">
                            <TypeWriterEffect
                                textStyle={{
                                    fontSize: "80px",
                                }}
                                cursorColor="white"
                                multiText={[
                                    "Welcome",
                                    "I'm William",
                                    "Let's connect",
                                ]}
                                loop={true}
                                multiTextLoop={true}
                                multiTextDelay={3000}
                                typeSpeed={70}
                            />
                        </div>
                        <h4 className="fade-in delay-med">
                            I'm a software developer based in Toronto, Canada specializing in full-stack development
                        </h4>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
