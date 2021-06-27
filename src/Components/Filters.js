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
                        onChange={onClickAll}
                    />
                    <label htmlFor="all">ALL</label>
                </li>
                {filters.map(
                    (filter, i) =>
                        <li key={i} data-index={i} onClick={onClick} >

                            <input
                                id={filter.name}
                                type="checkbox"
                                checked={filter.status}
                                onChange={onClick}
                            />
                            <label htmlFor={filter.name}>{filter.name}</label>
                        </li>)}
            </ul>
        </form>
    )
}

export default Filters;