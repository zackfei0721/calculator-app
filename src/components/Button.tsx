import React from 'react';

type Props = {
    onClick: (val: string) => void,
    value: string
};

const Button: React.FC<Props> = (props) => {
    let className;

    if (['+', '-', '*', '/', '='].includes(props.value)) {
        className = 'button-orange';
    } else if (['AC', '+/-', '%'].includes(props.value)) {
        className = 'button-gray';
    } else {
        className = 'button-light-gray';
    }

    if (props.value === '0') {
        className += ' wide';
    }

    return (
        <button className={className} onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
};

export default Button;