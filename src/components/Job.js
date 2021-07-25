import React from 'react';
import { Image } from 'react-bootstrap';

class Job extends React.Component {
    render() {
        return(
            <div className="work">
                <Image className="logo" src={this.props.image} roundedCircle />
                <div className="job">
                    <p className="job-title">{this.props.title}</p>
                    <p className="job-company">{this.props.company}</p>
                    <p className="date italics">{this.props.date}</p>
                    <br/>
                    <ul className="job-description">{this.props.description.map((point) => <li>{point}</li>)}</ul>
                </div>
            </div>
        );
    }
}

export default Job;