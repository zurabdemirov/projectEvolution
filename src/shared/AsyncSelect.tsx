import React, {useEffect} from "react";
import ReactSelect from "react-select/async";
import axios from "axios";

interface PropsType {
    id?: string,
    name: string,
    placeholder: string;
    optionValue: string,
    optionLabel: string,
    onChange:any,
    url: string,
    urlFilter: string,
    className?: string
}

const getOption = ({name}: { name: string; }) => (name)

export const AsyncSelect = ({
                                id,
                                name,
                                // value,
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
            }).catch(function (error) {
                if (error.response) {
                    console.log('@@@error.response.data', error.response.data)
                    console.log('@@@error.response.status', error.response.status)
                    console.log('@@@error.response.headers', error.response.headers)
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
            onChange={onChange}
            defaultOptions
            className={className}
            {...rest}
        />
    );
};