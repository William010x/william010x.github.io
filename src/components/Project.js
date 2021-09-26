import React from 'react';
import { Image } from 'react-bootstrap';

class Project extends React.Component {
    render() {
        return(
            <div className="project">
                <div className="project-image">
                    <a href={this.props.link} target="_blank" rel="noreferrer">
                        <Image className="shade img-hover" src={this.props.image} fluid />
                    </a>
                </div>
                <div></div>
                <div className="project-description shade">
                    <div className="project-title">{this.props.title}</div>
                    {this.props.description}
                </div>
                <div className="badges">
                    {this.props.skills.map((skill) => <span className="badge shade">{skill}</span>)}
                </div>
            </div>
        );
    }
}

export default Project;