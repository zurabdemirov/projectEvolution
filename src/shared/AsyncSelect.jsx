import React from "react";
import ReactSelect from "react-select/async";
import axios from "axios";

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
                                ...rest
                            }) => {
    const loadOptions = (inputValue, callback) => {
        axios.get(url).then(function (response) {
            console.log(response);
            const filterOptions = response.data?.filter((i) =>
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