import React, {useEffect} from "react";
import ReactSelect from "react-select/async";
import axios from "axios";
import {StateType} from "../app/app";

interface PropsType {
    id?: string,
    name: string,
    value: string,
    cacheOptions: any,
    placeholder: string;
    getOptionValue: { name: string; },
    getOptionLabel: { name: string; },
    onChange:any,
    defaultOptions: any,
    url: string,
    urlFilter: string,
    state: StateType
}

export const AsyncSelect = ({
                                id,
                                name,
                                value,
                                cacheOptions,
                                placeholder,
                                getOptionValue,
                                getOptionLabel,
                                onChange,
                                defaultOptions,
                                url,
                                urlFilter,
                                state,
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
            cacheOptions={cacheOptions}
            placeholder={placeholder}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            loadOptions={loadOptions}
            onChange={onChange}
            defaultOptions={defaultOptions}
            {...rest}
        />
    );
};