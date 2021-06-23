import React from 'react';

const ProjectCard = (props) => {
    const { i, project } = props;
    return (
        <li key={i}>
            <figure>
                <img src={project.image} alt={project.title} />
                <figcaption>
                    <div>{project.title} </div>
                    <span>{project.description} </span>
                    {/* <a href='#'>See More</a> */}
                </figcaption>
            </figure>
        </li>
    )
}

export default ProjectCard;
