import React from 'react';

type Props = {
    onClick: (val: string) => void,
    value: string
};

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
};

export default Button;