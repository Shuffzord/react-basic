import React from 'react';
import CountUp from 'react-countup';

const Counter = (props) => {
    return (
        <div className="text text-border d-flex align-items-center">
            <CountUp start={props.start} end={props.end} duration={5} separator="" delay={0} {...props}>
                {({ countUpRef }) => (
                    <strong className="number" ref={countUpRef} />
                )}
            </CountUp>
            <span>{props.title}</span>
        </div>
    );
}

export default Counter;