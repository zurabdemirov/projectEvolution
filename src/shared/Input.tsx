import React from "react";
import { ChangeEvent } from 'react';

interface PropsType {
    name: string;
    className: string;
    onChange:(e:ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({onChange, name, className, ...rest}: PropsType) => {
    return (
        <input
            name={name}
            className={className}
            onChange={onChange}
            {...rest}
        />
    );
};