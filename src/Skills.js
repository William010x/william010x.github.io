import React from 'react';
import { Container } from 'react-bootstrap';
import Skill from './components/Skill';
import './css/About.css';

class Skills extends React.Component {
    render() {
        return(
            <Container id="skills">
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
            </Container>
        );
    }
}

export default Skills;