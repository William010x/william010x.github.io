import React from 'react';
import Skill from './components/Skill'
import Job from './components/Job';
import ProjectCarousel from './components/ProjectCarousel';
import bayer from './images/bayer.png';
import uoft from './images/uoft.png';
import bookRecommender from './images/bookRecommender.png';
import nox from './images/nox.png';
import javaBot from './images/java-music.png';
import website from './images/website.png';
import Project from './components/Project';
import './css/About.css';

class About extends React.Component {
    render() {
        return(
            <div className="App-page about">
                <div id="skills">
                    <h2>Technical Skills</h2>
                    <div className="skillset">
                        <Skill name="Java" proficiency="Proficient" level={85}/>
                        <Skill name="Python" proficiency="Proficient" level={85}/>
                        <Skill name="Javascript" sub=" (React, Express, Node, Redux, jQuery)" proficiency="Proficient" level={85}/>
                        <Skill name="Databases" sub=" (PostgreSQL, MongoDB, Neo4j)" proficiency="Proficient" level={85}/>
                        <Skill name="HTML/CSS" proficiency="Proficient" level={80}/>
                        <Skill name="Version Control" sub=" (Git, Mercurial)" proficiency="Proficient" level={70}/>
                        <Skill name="Linux" proficiency="Familiar" level={60}/>
                        <Skill name="C" proficiency="Familiar" level={60}/>
                        <Skill name="Jenkins (CI)" proficiency="Familiar" level={40}/>
                    </div>
                </div>
                <div id="jobs">
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
                </div>
                <div id="projects">
                    <h2>Featured projects</h2>
                    <Project
                        image={bookRecommender}
                        title="Book Recommender"
                        description="Book Recommender takes as input your favourite book, and outputs books of similar themes, ratings, and styles. Winner of Best UI/UX Hack @ PennApps XXII"
                        link="https://github.com/William010x/book-recommender"
                        skills={["Flask", "Python", "React", "SCSS"]}
                    />
                    <Project
                        image={nox}
                        title="Nox"                        
                        description="Nox is a communication platform for professors to get real-time feedback from students while they teach"
                        link="https://github.com/William010x/Nox"
                        skills={["MongoDB", "Express", "React", "Node"]}
                    />
                    <hr/>
                    <Project
                        image={javaBot}
                        title="JavaBot"
                        description="A customizable Discord bot that can play music and moderate servers"
                        link="https://github.com/William010x/JavaBot"
                        skills={["Java", "Java Discord API"]}
                    />
                    <hr/>
                    <Project
                        image={website}
                        title="Website"
                        description="My personal website/portfolio deployed using Github"
                        link="https://github.com/William010x/william010x.github.io"
                        skills={["React", "React-Bootstrap", "React-Router"]}
                    />
                    <h2>Other projects</h2>
                    <ProjectCarousel/>
                </div>
            </div>
        );
    }
}

export default About;