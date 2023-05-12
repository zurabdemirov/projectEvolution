import React from "react";
import { filters } from "./Filters";
import {useFilter} from "./hooks/useFilter";

export default function TrainingAsyncSelect() {
    const { onChange, state } = useFilter();

    return (
        <div className='app'>
            {filters?.map(({component, name, getUrl, ...rest}) => (
                <React.Fragment key={name}>
                    {component({
                        ...rest,
                        onChange,
                        name,
                        state,
                        ...(getUrl && { url: getUrl(state?.firstSelect?.id)})
                    })}
                </React.Fragment>
            ))}
        </div>
    );
}
