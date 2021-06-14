import React from 'react';
import { useTranslation } from 'react-i18next'

const Client = (props) => {
    const { t } = useTranslation();
    const imageName = t(`clients.${props.client}.image`);
    const imageUrl = require(`../images/${imageName}`)

    return (
        <div class="item">
            <div class="testimony-wrap py-4">
                <div class="text">
                    <span class="fa fa-quote-left"></span>
                    <p class="mb-4">{t(`clients.${props.client}.description`)}</p>
                    <div class="d-flex align-items-center">
                        <div class="user-img" style={{ backgroundImage: `url("${imageUrl}` }}></div>
                        <div class="pl-3">
                            <p class="name">{t(`clients.${props.client}.name`)}</p>
                            <span class="position">{t(`clients.${props.client}.reviewer`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;
