import React, { useState } from 'react'; //{ useState, useEffect }
import Filters from './Filters';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next'
import ENUM from '../data/Enums';
import ProjectsData from '../data/ProjectsData';

const Projects = () => {
  const { t } = useTranslation();
  const filters = [
    { name: ENUM.Filters.RECENT, status: false },
    { name: ENUM.Filters.BTS, status: false },
    { name: ENUM.Filters.PRIVATE, status: false },
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
    else {
      updateProjects();
    }
  }

  const updateProjects = () => {
    const { filters } = state;
    let newProjects = [];
    ProjectsData.forEach((project) => {
      filters.forEach(filter => {
        if (project.tags.includes(filter.name) && (filter.status === true) && !newProjects.includes(x => x.id === project.id)) {
          if (!newProjects.find(x => x.id === project.id)) {
            newProjects.push(project);
          }
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
      <div className="row justify-content-center mt-5">
        <div className="col-md-7 text-center heading-section ">
          <span className="subheading">{t('projects.header')}</span>
        </div>
      </div>
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
