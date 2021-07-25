import React from 'react';
import { Card } from "react-bootstrap";
import blue from '../images/blue.jpg';

class ProjectCard extends React.Component {
    render() {
        return(
            <Card bg="secondary">
                <Card.Header>Featured</Card.Header>
                <Card.Img variant="top" src={blue} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ProjectCard;