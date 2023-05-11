import React from "react";
import ReactSelect from "react-select/async";
import axios from "axios";
import {ActionMeta, SingleValue} from "react-select";

interface PropsType {
    id?: string,
    name: string,
    placeholder: string;
    optionValue: string,
    optionLabel: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    url?: string,
    urlFilter: string,
    className?: string,
}

const getOption = ({name}: { name: string; }) => (name)
const domain = 'http://localhost:3001/'

export const AsyncSelect = ({
                                name,
                                placeholder,
                                onChange,
                                url,
                                className,
                                urlFilter = "name",
                                optionValue = "name",
                                optionLabel = "name",
                                ...rest
                            }: PropsType) => {
    const loadOptions = (inputValue: string, callback: (arg: any) => void) => {
            const urlPrams = `${domain}${url}`
            axios.get(urlPrams).then(function (response) {
                const filterOptions = response.data?.filter((i: { [x: string]: string; }) =>
                    i[urlFilter]?.toLowerCase().includes(inputValue.toLowerCase())
                );
                callback(filterOptions);
            }).catch(function (error) {
                if (error.response) {
                    console.log('@@@error', error)
                }
            })
    };

    const handleChange = (value: SingleValue<{id: number, name: string}>, {name}: ActionMeta<{id: number, name: string}>) => {
        onChange({target: {value, name}} as unknown as React.ChangeEvent<HTMLInputElement>)
    }

    return (
        <ReactSelect
            name={name}
            placeholder={placeholder}
            getOptionValue={getOption}
            getOptionLabel={getOption}
            loadOptions={loadOptions}
            onChange={handleChange}
            defaultOptions
            className={className}
            {...rest}
        />
    );
};