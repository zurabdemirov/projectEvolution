import React, { useEffect, useState, ChangeEvent } from "react";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../../requests";
import {formsObject, State} from '../../type'
import { filters } from "./Filters";

export default function TrainingAsyncSelect() {
    const [state, setState] = useState<State>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev: State) => ({...prev, [e.target.name]: e?.target?.value}))
    };

    useEffect(() => {
        setState((prevState) => ({ ...prevState, secondSelect: null }));
    }, [state?.firstSelect?.id]);

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
                        ...(getUrl && state?.firstSelect?.id && { url: getUrl(state?.firstSelect?.id)})
                    })}
                </React.Fragment>
            ))}
        </div>
    );
}
