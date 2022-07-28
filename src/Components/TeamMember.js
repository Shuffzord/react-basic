import React from 'react';
import { useTranslation } from 'react-i18next'

const TeamMember = (props) => {
    const { t } = useTranslation();
    const mystery = require('../images/HEAD.png')
    return (
        <div className="team-container">
            <div className="team-wrap py-3">
                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center"

                }}>
                    <div className="d-flex align-items-start" style={{ width: '243px' }}>
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="user-img" style={{ backgroundImage: `url("${props.member.photo}` }}></div>
                            </div>
                        </div>
                        <div className="col-sm-10" style={{ paddingLeft: '5px' }}>
                            {(props.member.role === 'mystery') ?
                                <div className="head" style={{
                                    backgroundImage: `url("${mystery}`
                                }}></div> : (<>  <p className="name">{props.member.name}</p>
                                    <p className="position">{t(props.member.role)} </p>
                                    <a className="email" href={`mailto:${props.member.contact}`}> {props.member.contact}</a></>)
                            }

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
