import React from 'react';
import { useTranslation } from 'react-i18next'

const Filters = (props) => {
    
  const { t } = useTranslation();
    const { onClickAll, all, onClick, filters } = props;
    return (
        <form>
            <ul>
                <li onClick={onClickAll}>
                    <input
                        type="checkbox"
                        checked={all}
                        onChange={onClickAll}
                    />
                    <label htmlFor={t(`filters.ALL`)}>{t(`filters.ALL`)}</label>
                </li>
                {filters.map(
                    (filter, i) =>
                        <li key={i} data-index={i} onClick={onClick} >

                            <input
                                id={t(`filters.${filter.name}`)}
                                type="checkbox"
                                checked={filter.status}
                                onChange={onClick}
                            />
                            <label htmlFor={t(`filters.${filter.name}`)}>{t(`filters.${filter.name}`)}</label>
                        </li>)}
            </ul>
        </form>
    )
}

export default Filters;
