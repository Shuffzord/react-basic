import React from 'react';

const Filters = (props) => {
    const { onClickAll, all, onClick, filters } = props;
    return (
        <form>
            <ul>
                <li onClick={onClickAll}>
                    <input
                        type="checkbox"
                        checked={all}
                    />
                    <label htmlFor="all">All</label>
                </li>
                {filters.map(
                    (filter, i) =>
                        <li key={i} data-index={i} onClick={onClick} >
                            <input
                                id={filter.name}
                                type="checkbox"
                                checked={filter.status}
                            />
                            <label htmlFor={filter.name}>{filter.name}</label>
                        </li>)}
            </ul>
        </form>
    )
}

export default Filters;
