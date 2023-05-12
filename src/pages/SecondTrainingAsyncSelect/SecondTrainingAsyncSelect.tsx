import React from "react";
import { filters } from "./Filters";
import {secondFormsObject} from "../../type";
import {useFilter} from "../../hooks/useFilter";

export default function SecondTrainingAsyncSelect() {
    const { onChange, state } = useFilter(secondFormsObject);

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
