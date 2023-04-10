import React, {useEffect} from "react";
import ReactSelect from "react-select/async";
import axios from "axios";
import {StateType} from "../app/app";

interface PropsType {
    id?: string,
    name: string,
    value: { name: string; } | undefined,
    placeholder: string;
    optionValue: string,
    optionLabel: string,
    onChange:any,
    url: string,
    urlFilter: string,
    className?: string
}

export const AsyncSelect = ({
                                id,
                                name,
                                value,
                                placeholder,
                                optionValue,
                                optionLabel,
                                onChange,
                                url,
                                urlFilter,
                                className,
                                ...rest
                            }: PropsType) => {

    const loadOptions = (inputValue: string, callback: (arg: any) => void) => {
        axios.get(url).then(function (response) {
            const filterOptions = response.data?.filter((i: { [x: string]: string; }) =>
                i[urlFilter]?.toLowerCase().includes(inputValue.toLowerCase())
            );

            callback(filterOptions);
        });
    };

    return (
        <ReactSelect
            id={id}
            name={name}
            value={value}
            cacheOptions
            placeholder={placeholder}
            getOptionValue={({ name }: { name: string; }) => name}
            getOptionLabel={({ name }: { name: string; }) => name}
            loadOptions={loadOptions}
            onChange={onChange}
            defaultOptions
            className={className}
            {...rest}
        />
    );
};