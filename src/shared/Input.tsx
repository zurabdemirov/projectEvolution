import React from "react";
import { ChangeEvent } from 'react';

interface PropsType {
    name: string;
    state: any;
    className: string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({onChange, name, state, className, ...rest}: PropsType) => {
    return (
        <input
            name={name}
            value={state[name]}
            className={className}
            onChange={onChange}
            {...rest}
        />
    );
};