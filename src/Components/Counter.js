import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = (props) => {
    return (
        <div className="text text-border d-flex align-items-center">
            <CountUp start={props.start} end={props.end} duration={5} separator="" delay={0} {...props}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <strong className="number" ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
            <span>{props.title}</span>
        </div>
    );
}

export default Counter;
