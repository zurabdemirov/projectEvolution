import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import { useAsyncFn } from 'react-use';
import {fetch} from "../requests";
import {formsObject, PostsType, StateType} from '../type'

export default function App() {
    const [state, setState] = useState<any>(formsObject);
    const [{value}, getCountries] = useAsyncFn(fetch);

    const urlSecondSelect = state.firstSelect.id
        ? `http://localhost:3001/cities?countryId=${state.firstSelect.id}`
        : `http://localhost:3001/cities`

    const onOptionChange = (newValue: PostsType, actionMeta: any) => {
        setState((state: any) => ({...state, [actionMeta.name]: newValue}))
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
                        key={JSON.stringify(urlSecondSelect)}
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
