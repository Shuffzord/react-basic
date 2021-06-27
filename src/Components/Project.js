import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProjectsData from '../data/ProjectsData';
import { useTranslation } from 'react-i18next'

const Project = (props) => {
    const { t } = useTranslation();
    let { id } = useParams();
    const projects = ProjectsData.slice();
    const project = projects.find(x => x.id === +id);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    if (!project) {
        return <div>No active project</div>
    }
    return (
        <section className="ftco-section ftco-portfolio">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-12 portfolio-wrap">
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-5 fullheight" style={{ backgroundImage: `url("${project.detailPageImage}")`, borderRadius: 25 }}>
                                {/* style="background-image: url(images/work-1.jpg);" */}
                            </div>
                            <div className="col-md-7">
                                <div className="text pt-5 pl-0 pl-lg-5 pl-md-4 ftco-animate">
                                    <div className="px-4 px-lg-4">
                                        <div className="desc">
                                            <div className="top">
                                                <span className="subheading">{project.date}</span>
                                                <h2 className="mb-4">{project.title}</h2>
                                            </div>
                                            <div className="absolute">
                                                <p><span className="subheading">{t('projects.investor')}</span>{project.investor}</p>
                                                <p><span className="subheading">{t('projects.location')}</span>{project.location}</p>
                                                <p><span className="subheading">{t('projects.warehouseSpace')}</span>{project.warehouseSpace}m²</p>
                                                <p><span className="subheading">{t('projects.area')}</span>{project.area}m²</p>
                                                <p><span className="subheading">{t('projects.officeSpace')}</span>{project.officeSpace}m²</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;
