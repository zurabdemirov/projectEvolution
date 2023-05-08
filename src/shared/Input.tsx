import React from "react";
import { ChangeEvent } from 'react';

interface PropsType {
    name: string;
    state: any;
    className: string;
    onInputChange:(e:ChangeEvent<HTMLInputElement>, name: string) => void;
}

export const Input = ({onInputChange, name, state, className, ...rest}: PropsType) => {
    return (
        <input
            name={name}
            value={state[name]}
            className={className}
            onChange={(() => (e) => onInputChange(e, name))()}
            {...rest}
        />
    );
};