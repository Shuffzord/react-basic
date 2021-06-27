import React from 'react';
import { Link } from "react-router-dom";
const ProjectCard = (props) => {
    const { i, project } = props;
    return (
        <li key={i}>
            <figure>
                <Link to={`/Project/${project.id}`}>
                    <img src={project.image} alt={project.title} />
                </Link>
                <figcaption>
                    <div>{project.title} </div>
                    <span>{project.investor} </span>
                </figcaption>
            </figure>
        </li>
    )
}

export default ProjectCard;
