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
                    <Skill name="Javascript" sub=" (React, Express, Node, Redux, jQuery)" proficiency="Proficient" level={85}/>
                        <Skill name="Java" proficiency="Proficient" level={85}/>
                        <Skill name="Python" proficiency="Proficient" level={85}/>
                        <Skill name="GraphQL" proficiency="Proficient" level={80}/>
                        <Skill name="Databases" sub=" (PostgreSQL, MongoDB, Neo4j)" proficiency="Proficient" level={80}/>
                        <Skill name="HTML/CSS" proficiency="Proficient" level={75}/>
                        <Skill name="Version Control" sub=" (Git, Mercurial)" proficiency="Proficient" level={70}/>
                        <Skill name="C" proficiency="Familiar" level={60}/>
                        <Skill name="Machine Learning" proficiency="Familiar" level={55}/>
                    </div>
            </Container>
        );
    }
}

export default Skills;