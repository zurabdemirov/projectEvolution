import React, { useEffect, useState, ChangeEvent } from "react";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../../requests";
import { formsObject } from '../../type'
import { filters } from "./Filters";

export default function TrainingAsyncSelect() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev: any) => ({...prev, [e.target.name]: e?.target?.value}))
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
                            onChange: onChange,
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
