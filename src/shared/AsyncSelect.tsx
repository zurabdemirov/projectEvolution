import React, {useEffect} from "react";
import ReactSelect from "react-select/async";
import axios from "axios";

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

const getOption = ({name}: { name: string; }) => (name)

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
        try {
            axios.get(url).then(function (response) {
                const filterOptions = response.data?.filter((i: { [x: string]: string; }) =>
                    i[urlFilter]?.toLowerCase().includes(inputValue.toLowerCase())
                );
                callback(filterOptions);
            });
        } catch (error: any) {
            console.error("Произошла ошибка при загрузке параметров селекта");
        }
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