import React from 'react';
import { Container } from 'react-bootstrap';
import './css/Home.css';

class Home extends React.Component {
    render() {
        return(
            <div id="home">
                <Container>
                    <div className="intro">
                        <h1 className="fade-in">Hi, my name is </h1>
                        <h3 className="header fade-in delay-short">William San</h3>
                        <h4 className="fade-in delay-med">
                            I'm a software developer based on Toronto, Canada specializing in full-stack development
                        </h4>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;