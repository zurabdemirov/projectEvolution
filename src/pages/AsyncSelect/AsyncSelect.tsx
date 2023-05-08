import React, { useEffect, useState, ChangeEvent } from "react";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../../requests";
import { formsObject, Posts } from '../../type'
import { filters } from "./Filters";

export default function TrainingAsyncSelect() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onOptionChange = (newValue: Posts, {name}: Posts) => {
        setState((state: any) => ({...state, [name]: newValue}))
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
        setState((state: any) => ({...state, [name]: e?.target?.value}))
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
                            onOptionChange: onOptionChange,
                            onInputChange: onInputChange,
                            name,
                            state,
                            setState,
                            ...(getUrl && { url: getUrl(state.firstSelect.id)})
                        })}
                    </>
                ))}
            </div>
        </>
    );
}
