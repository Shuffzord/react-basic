import Project from '../models/Project';
import ENUM from './Enums';

const ProjectsData = [
    new Project(1,
        "Hillwood Park Bydgoszcz",
        "Hillwood",
        "Temporary 1",
        require('../images/projects/1/2.jpg'),
        [ENUM.Filters.RECENT, ENUM.Filters.LOGISTICS],
        "Bydgoszcz",
        "2020",
        111789,
        236363,
        5400,
        require('../images/projects/1/1.jpg'),
        [
            require('../images/projects/1/5.jpg'),    
            require('../images/projects/1/3.jpg'), 
            require('../images/projects/1/4.jpg'),    
    ]),
    new Project(2, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_2.jpg'), [ENUM.Filters.BTS]),
    new Project(3, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_3.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(4, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_4.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(5, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_5.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(6, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_6.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(7, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_7.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(8, "Temporary 2", "Hillwood", "Temporary 2", require('../images/image_8.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(9, "Temporary 2", "Hillwood", "Temporary 2", require('../images/work-1.jpg'), [ENUM.Filters.PRIVATE]),
    new Project(10, "Temporary 2", "Hillwood", "Temporary 2", require('../images/work-2.jpg'), [ENUM.Filters.PRIVATE]),
];

export default ProjectsData;