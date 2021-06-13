import React from 'react';
import CountUp from 'react-countup';

const Counter = (props) => {
    return (
        <div class="text text-border d-flex align-items-center">
            <CountUp start={props.start} end={props.end} delay={0} {...props}>
                {({ countUpRef }) => (
                    <strong class="number" ref={countUpRef} />
                )}
            </CountUp>
            <span>{props.title}</span>
        </div>
    );
}

export default Counter;
