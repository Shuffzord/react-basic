import React from 'react'; //{ useState, useEffect }
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

const filters = [
  { name: ENUM.Filters.RECENT, status: false },
  { name: ENUM.Filters.BTS, status: false },
  { name: ENUM.Filters.INDIVIDUAL, status: false },
  { name: ENUM.Filters.LOGISTICS, status: false }
];

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
  new Project(7, "Temporary 2", "Temporary 2", require('../images/image_8.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/work-1.jpg'), [ENUM.Filters.INDIVIDUAL]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/work-2.jpg'), [ENUM.Filters.INDIVIDUAL]),
];

const Projects = () => {

  // const [filters, setFilters] = useState([]);
  // useEffect(() => {
  //   setFilters([])
  // }, [])

  //https://codepen.io/OlgaKoplik/pen/dybvEMv


  return (
    <section id="Projects" className="project-area section-gap-top">
      <Filters
        onClickAll={() => { }}
        all={true}
        onClick={() => { }}
        filters={filters} />
      <ul>
        {ProjectsData.map(
          (project, i) =>
            <ProjectCard i={i} project={project} />
        )}
      </ul>
    </section>
  );
}

export default Projects;
