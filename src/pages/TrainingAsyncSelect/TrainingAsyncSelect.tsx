import React, {useEffect} from "react";
import { filters } from "./Filters";
import {formsObject, State} from "../../type";
import {useFilter} from "../../hooks/useFilter";
import {fetchCountries} from "../../requests";
import {useAsyncFn} from "react-use";

export default function TrainingAsyncSelect() {
    const { onChange, state } = useFilter(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    useEffect(()=> {
        getCountries();
    }, [])

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
