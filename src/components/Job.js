import React from 'react';
import { Image } from 'react-bootstrap';

class Job extends React.Component {
    render() {
        return(
            <div className="work">
                <Image className="logo" src={this.props.image} roundedCircle />
                <div className="job">
                    <div className="job-title">{this.props.title}</div>
                    <div className="job-company">{this.props.company}</div>
                    <div className="date italics">{this.props.date}</div>
                    <br/>
                    <ul className="job-description">{this.props.description.map((point) => <li>{point}</li>)}</ul>
                </div>
            </div>
        );
    }
}

export default Job;