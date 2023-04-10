import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../requests";
import { formsObject, Posts, State } from '../type'

export default function App() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const urlSecondSelect = state.firstSelect.id
        ? `http://localhost:3001/cities?countryId=${state.firstSelect.id}`
        : `http://localhost:3001/cities`

    const onOptionChange = (newValue: Posts, { name }: Posts) => {
        setState((state: any) => ({...state, [name]: newValue}))
    };

    useEffect(() => {
        setState({ ...state, secondSelect: "" });
    }, [state.firstSelect.id]);

    useEffect(()=> {
        getCountries();
    }, [])

    return (
        <>
            <div className='app'>
                    <AsyncSelect
                        name="firstSelect"
                        value={state.firstSelect}
                        placeholder="first"
                        url="http://localhost:3001/countries"
                        urlFilter="name"
                        onChange={onOptionChange}
                        optionValue="name"
                        optionLabel="name"
                        className={'selectContainer'}
                    />
                    <AsyncSelect
                        key={urlSecondSelect}
                        name="secondSelect"
                        value={state.secondSelect}
                        placeholder="second"
                        url={urlSecondSelect}
                        urlFilter="name"
                        onChange={onOptionChange}
                        optionValue="name"
                        optionLabel="name"
                        className={'selectContainer'}
                    />
            </div>
        </>
    );
}
