import React, {useEffect} from "react";
import { filters } from "./Filters";
import {secondFormsObject} from "../../type";
import {useFilter} from "../../hooks/useFilter";
import {fetchCar} from "../../requests";
import {useAsyncFn} from "react-use";

export default function SecondTrainingAsyncSelect() {
    const { onChange, state } = useFilter(secondFormsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCar);

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
