import React from 'react';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import apollo from './images/apollo.png';
import bayer from './images/bayer.png';
import uoft from './images/uoft.png';
import './css/About.css';

class Jobs extends React.Component {
    render() {
        return(
                <Container id="jobs">
                    <h2>Work Experience</h2>
                    <Job
                        image={apollo}
                        title="Software Engineer Intern"
                        company="Apollo GraphQL"
                        date="Jan 2022 - Aug 2022"
                        description={["Designed and developed new capabilities for a commercial SaaS for modern graph-based application development with the developer tooling team",
                            "Implemented end-to-end authentication flow for embedding private graphs on any website using TypeScript, React, Node, Tailwind and GraphQL",
                            "Advanced the front-end infrastructure to improve stability and performance while helping guarantee the highest uptimes for some of the largest companies",
                            "Created a testing suite to catch errors with end-to-end user flows using Cypress"
                            ]}
                    />
                    <Job
                        image={bayer}
                        title="Software Developer Intern"
                        company="Bayer"
                        date="May 2020 - Aug 2021"
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
                        date="Sep 2021 - Apr 2022 | Sep 2019 - Apr 2020"
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