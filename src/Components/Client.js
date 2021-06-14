import React from 'react';
import { useTranslation } from 'react-i18next'

const Client = (props) => {
    const { t } = useTranslation();
    const imageName = t(`clients.${props.client}.image`);
    const imageUrl = require(`../images/${imageName}`)

    return (
        <div className="item">
            <div className="testimony-wrap py-4">
                <div className="text">
                    <span className="fa fa-quote-left"></span>
                    <p className="mb-4">{t(`clients.${props.client}.description`)}</p>
                    <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: `url("${imageUrl}` }}></div>
                        <div className="pl-3">
                            <p className="name">{t(`clients.${props.client}.name`)}</p>
                            <span className="position">{t(`clients.${props.client}.reviewer`)}</span>
                            <p className="position">{t(`clients.${props.client}.date`)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
