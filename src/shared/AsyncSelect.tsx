import React, {useEffect} from "react";
import ReactSelect from "react-select/async";
import axios from "axios";

interface PropsType {
    id?: string,
    name: string,
    placeholder: string;
    optionValue: string,
    optionLabel: string,
    onOptionChange:any,
    url?: string,
    urlFilter: string,
    className?: string,
}

const getOption = ({name}: { name: string; }) => (name)
const domain = 'http://localhost:3001/'

export const AsyncSelect = ({
                                name,
                                placeholder,
                                onOptionChange,
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
                } else if (error.request) {
                    console.log('@@@error.request', error.request)
                } else {
                    console.log('@@@Error', error.message);
                }
            })
    };

    return (
        <ReactSelect
            name={name}
            placeholder={placeholder}
            getOptionValue={getOption}
            getOptionLabel={getOption}
            loadOptions={loadOptions}
            onChange={onOptionChange}
            defaultOptions
            className={className}
            {...rest}
        />
    );
};