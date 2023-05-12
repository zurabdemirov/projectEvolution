import React from "react";
import { filters } from "./Filters";
import {formsObject} from "../../type";
import {useFilter} from "../../hooks/useFilter";
import {fetchCountries} from "../../requests";

export default function TrainingAsyncSelect() {
    const { onChange, state } = useFilter(formsObject, fetchCountries);

    return (
        <div className='app'>
            {filters?.map(({component, name, getUrl, ...rest}) => (
                <React.Fragment key={name}>
                    {component({
                        ...rest,
                        onChange,
                        name,
                        state,
                        ...(getUrl && { url: getUrl(state)})
                    })}
                </React.Fragment>
            ))}
        </div>
    );
}
