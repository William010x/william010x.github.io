import React from 'react';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import bayer from './images/bayer.png';
import uoft from './images/uoft.png';
import './css/About.css';

class Jobs extends React.Component {
    render() {
        return(
                <Container id="jobs">
                    <h2>Work Experience</h2>
                    <Job
                        image={bayer}
                        title="Software Developer"
                        company="Bayer"
                        date="May 2020 - August 2021"
                        description={["Developed and maintained full-stack web application for Radiologists which processed, analyzed and rendered medical data visually",
                            "Responsible for implementing interfaces for consumption of radiation exposure, UI enhancements, fixing bugs and database upgrades",
                            "Worked with variety of languages, frameworks, platforms and DBMS such as Java, JavaScript, Python, React, Node.js, REST API, PostgreSQL",
                            "Communicating and collaborating with teams of engineers, product managers, QA developers and clients on a daily basis",
                            "Writing confluence pages, participating in peer code reviews, preparing reports and other documentation"]}
                    />
                    <hr/>
                    <Job
                        image={uoft}
                        title="Teaching Assistant"
                        company="University of Toronto"
                        date="Sept 2019 - April 2020 | Sept 2021 - Present"
                        description={["TA for CSC373 Algorithm Design, Analysis & Complexity and MAT135 Differential Calculus at the University of Toronto Mississauga",
                            "Provided one-on-one mentoring with students",
                            "Created lesson plans to help students understand course content for 4 tutorial sessions",
                            "Graded assessments and answered questions on class forums for 1500+ students"]}
                    />
                </Container>
        );
    }
}

export default Jobs;