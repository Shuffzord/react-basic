import React from 'react';
import { useTranslation } from 'react-i18next'

const TeamMember = (props) => {
    const { t } = useTranslation();
    return (
        <div className="team-container">

            <div className="team-wrap py-4">
                <div className="user-img" style={{ backgroundImage: `url("${props.member.photo}` }}></div>
                <div className="text">
                    <div className="d-flex align-items-center">
                        <div className="pl-3">
                            <p className="name">{props.member.name}</p>
                            <span className="position">{t(`${props.member.role}`).toUpperCase()}</span>
                            <p className="position email">{props.member.contact}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
