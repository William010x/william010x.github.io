import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCarousel from './components/ProjectCarousel';
import bookRecommender from './images/bookRecommender.png';
import nox from './images/nox.png';
import javaBot from './images/java-music.png';
import website from './images/website.png';
import Project from './components/Project';
import './css/About.css';

class Projects extends React.Component {
    render() {
        return(
            <Container>
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
            </Container>
        );
    }
}

export default Projects;