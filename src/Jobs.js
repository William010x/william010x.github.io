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
                        description={["Developed full-stack informatics platform that managed and rendered radiation dose of medical imaging devices at hospitals",
                            "Implemented RESTful APIs in various microservices using Java, Spring and PostgreSQL, enabling users to visualize, manipulate and process radiation dose analytics",
                            "Created interactive charts and interfaces with TypeScript, React and Sass, making the web app more responsive and easier to navigate",
                            "Built Python and SQL scripts to efficiently migrate data, replace Docker containers and upgrade the application to newer releases",
                            "Responsible for implementing UI enhancements, customer-facing components, fixing bugs and database schemas and database upgrades",
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
                            "Taught algorithms, design techniques, analysis of abstract data structures and complexity",
                            "Led office hours and weekly tutorials for 4 sections",
                            "Created lesson plans and provided one-on-one mentoring for students",
                            "Graded assessments and answered questions on class forums for 1500+ students"]}
                    />
                </Container>
        );
    }
}

export default Jobs;