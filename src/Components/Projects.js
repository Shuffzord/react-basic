import React, { useState } from 'react'; //{ useState, useEffect }
import Filters from './Filters';
import ProjectCard from './ProjectCard';

var ENUM = {
  Filters: Object.freeze({
    ALL: "ALL",
    RECENT: "RECENT",
    BTS: "BTS",
    INDIVIDUAL: "INDIVIDUAL",
    LOGISTICS: "LOGISTICS"
  },
  )
};


class Project {
  constructor(id, title, description, image, tags) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = [ENUM.Filters.ALL].concat(tags);
  }
}

const ProjectsData = [
  new Project(1, "Temporary 1", "Temporary 1", require('../images/image_1.jpg'), [ENUM.Filters.RECENT]),
  new Project(2, "Temporary 2", "Temporary 2", require('../images/image_2.jpg'), [ENUM.Filters.BTS]),
  new Project(3, "Temporary 2", "Temporary 2", require('../images/image_3.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(4, "Temporary 2", "Temporary 2", require('../images/image_4.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(5, "Temporary 2", "Temporary 2", require('../images/image_5.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(6, "Temporary 2", "Temporary 2", require('../images/image_6.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/image_7.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(8, "Temporary 2", "Temporary 2", require('../images/image_8.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(9, "Temporary 2", "Temporary 2", require('../images/work-1.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(10, "Temporary 2", "Temporary 2", require('../images/work-2.jpg'), [ENUM.Filters.INDIVIDUAL]),
];

const Projects = () => {
  const filters = [
    { name: ENUM.Filters.RECENT, status: false },
    { name: ENUM.Filters.BTS, status: false },
    { name: ENUM.Filters.INDIVIDUAL, status: false },
    { name: ENUM.Filters.LOGISTICS, status: false }
  ];

  const initialState =
  {
    filters: filters,
    projects: ProjectsData.slice(),
    all: true
  };
  const [state, setState] = useState(initialState);


  const setFilter = (e) => {
    e.preventDefault();
    const { filters } = state;
    const { index } = e.currentTarget.dataset;
    filters[index].status = !filters[index].status;

    setState(prevState => {
      return {
        ...prevState,
        all: false,
        filters: filters
      }
    })

    const allFiltersTrue = filters.every(filter => filter.status === true);
    const allFiltersFalse = filters.every(filter => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      setAll();
    }
    updateProjects();
  }

  const updateProjects = () => {
    const { filters } = state;
    let newProjects = [];
    ProjectsData.forEach((project) => {
      filters.forEach(filter => {
        if (project.tags.includes(filter.name) && (filter.status === true)) {
          newProjects.push(project);
        }
      })
    })

    setState(prevState => {
      return {
        ...prevState,
        projects: newProjects
      }
    })
  }

  const setAll = () => {
    const { filters } = state;
    filters.forEach(
      filter => {
        filter.status = false;
      }
    );
    const newProjects = ProjectsData.slice();

    setState(prevState => {
      return {
        ...prevState,
        filters: filters,
        projects: newProjects,
        all: true,
      }
    })
  }

  return (

    <section id="Projects" className="project-area section-gap-top pt-6">
      <Filters
        onClickAll={setAll}
        all={state.all}
        onClick={setFilter}
        filters={state.filters} />
      <ul>
        {state.projects.map(
          (project, i) =>
            <ProjectCard key={project.id} i={i} project={project} />
        )}
      </ul>
    </section>


  );
}

export default Projects;
