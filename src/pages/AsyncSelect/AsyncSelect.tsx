import React, { useEffect, useState } from "react";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../../requests";
import { formsObject, Posts, State } from '../../type'
import { filters } from "./Filters";

export default function TrainingAsyncSelect() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onOptionChange = (newValue: Posts, {name}: Posts) => {
        setState((state: any) => ({...state, [name]: newValue}))
    };

    useEffect(() => {
        setState((prevState: any) => ({ ...prevState, secondSelect: "" }));
    }, [state.firstSelect.id]);

    useEffect(()=> {
        getCountries();
    }, [])

    return (
        <>
            <div className='app'>
                {filters?.map(({component, name, getUrl, ...rest}) => (
                    <>
                        {component({
                            ...rest,
                            onChange: onOptionChange,
                            name,
                            state,
                            ...(getUrl && { url: getUrl(state.firstSelect.id)})
                        })}
                    </>
                ))}
            </div>
        </>
    );
}
