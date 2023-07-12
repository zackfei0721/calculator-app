import React from 'react';

type Props = {
    value: string;
}

const Display: React.FC<Props> = (props) => {
    return (
        <div>
            {props.value}
        </div>
    );
};

export default Display;