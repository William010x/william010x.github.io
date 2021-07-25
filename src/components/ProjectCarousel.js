import React from 'react';
import { Carousel } from 'react-bootstrap';
import calculator from '../images/calculator.png';
import ping from '../images/ping.gif';
import spikes from '../images/spikes.gif';
import paint from '../images/paint.gif';

class ProjectCarousel extends React.Component {
    render() {
        return(
            <Carousel pause="hover" className="shade other-projects">
                <Carousel.Item>
                    <a href="https://github.com/William010x/Ping" target="_blank" rel="noreferrer">
                        <img
                            className="d-block w-100 img-hover"
                            src={ping}
                            alt="Ping"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/William010x/Paint" target="_blank" rel="noreferrer">
                        <img
                            className="d-block w-100 img-hover"
                            src={paint}
                            alt="Paint"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/William010x/GradeCalculator" target="_blank" rel="noreferrer">
                        <img
                            className="d-block w-100 img-hover"
                            src={calculator}
                            alt="Grade Calculator"
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/William010x/Spikes" target="_blank" rel="noreferrer">
                        <img
                            className="d-block w-100 img-hover"
                            src={spikes}
                            alt="Spikes"
                        />
                    </a>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default ProjectCarousel;