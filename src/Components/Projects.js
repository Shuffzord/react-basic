import React from 'react'; //{ useState, useEffect }

var ENUM = {
  Filters: Object.freeze({
    ALL: "ALL",
    RECENT: "RECENT",
    TEMP1: "Temp1",
    TEMP2: "Temp2"
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
  new Project(2, "Temporary 2", "Temporary 2", require('../images/image_2.jpg'), [ENUM.Filters.TEMP1]),
  new Project(3, "Temporary 2", "Temporary 2", require('../images/image_3.jpg'), [ENUM.Filters.TEMP2]),
  new Project(4, "Temporary 2", "Temporary 2", require('../images/image_4.jpg'), [ENUM.Filters.TEMP2]),
  new Project(5, "Temporary 2", "Temporary 2", require('../images/image_5.jpg'), [ENUM.Filters.TEMP2]),
  new Project(6, "Temporary 2", "Temporary 2", require('../images/image_6.jpg'), [ENUM.Filters.TEMP2]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/image_7.jpg'), [ENUM.Filters.TEMP2]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/image_8.jpg'), [ENUM.Filters.TEMP2]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/work-1.jpg'), [ENUM.Filters.TEMP2]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/work-2.jpg'), [ENUM.Filters.TEMP2]),
  new Project(7, "Temporary 2", "Temporary 2", require('../images/work-3.jpg'), [ENUM.Filters.TEMP2]),
  // new Project(7, "Temporary 2", "Temporary 2", require('../images/work-4.jpg'), [ENUM.Filters.TEMP2]),
  // new Project(7, "Temporary 2", "Temporary 2", require('../images/work-5.jpg'), [ENUM.Filters.TEMP2]),
  // new Project(7, "Temporary 2", "Temporary 2", require('../images/work-6.jpg'), [ENUM.Filters.TEMP2]),
  // new Project(7, "Temporary 2", "Temporary 2", require('../images/work-7.jpg'), [ENUM.Filters.TEMP2]),
  // new Project(7, "Temporary 2", "Temporary 2", require('../images/work-8.jpg'), [ENUM.Filters.TEMP2]),
];

const Projects = () => {

  // const [filters, setFilters] = useState([]);
  // useEffect(() => {
  //   setFilters([])
  // }, [])

  //https://codepen.io/OlgaKoplik/pen/dybvEMv


  return (
    <section id="Projects" className="project-area section-gap-top">
      <ul>
        {ProjectsData.map(
          (project, i) =>
            <li key={i}>
              <figure>
                <img src={project.image} alt={project.title} />
                <figcaption>
                  <div>{project.title} </div>
                  <span>{project.description} </span>
                  {/* <a href='#'>See More</a> */}
                </figcaption>
              </figure>
            </li>)}
      </ul>
      {/* {ProjectsData.map((project) => {
        return (
          <>
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
            <div>
              {project.tags.map((tag) => {
                return <span>{tag} </span>
              })}
            </div>
            <div className="project-image" style={{ backgroundImage: `url("${project.image}` }}></div>
          </>
        );
      })} */}
    </section>
  );
}

export default Projects;
