import React from 'react';
import { ProgressBar } from 'react-bootstrap';

class Skill extends React.Component {
    render() {
        return(
            <div className="skill">
                <span className="skill-name">{this.props.name}</span>
                <span className="skill-sub">{this.props.sub}</span>
                <span className="skill-proficiency right">{this.props.proficiency}</span>
                <ProgressBar variant="success" now={this.props.level}/>
            </div>
        );
    }
}

export default Skill;