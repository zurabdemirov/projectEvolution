import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../requests";
import { formsObject, Posts, State } from '../type'
// @ts-ignore
import qs from 'qs';

export default function App() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onOptionChange = (newValue: Posts, { name }: Posts) => {
        setState((state: any) => ({...state, [name]: newValue}))
    };

    const generateUrlSelect = (name: string) => {
        const url = `http://localhost:3001/`
        if (name === "firstSelect") {
            return `${url}countries`
        }

        if(name === "secondSelect" && state.firstSelect.id){
            const queryString = qs.stringify({ countryId: state.firstSelect.id });
            return `${url}cities?${queryString}`
        }
        return `${url}cities`
    }

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
                        placeholder="first"
                        url={generateUrlSelect("firstSelect")}
                        urlFilter="name"
                        onChange={onOptionChange}
                        optionValue="name"
                        optionLabel="name"
                        className={'selectContainer'}
                    />
                    <AsyncSelect
                        key={state.firstSelect.id}
                        name="secondSelect"
                        placeholder="second"
                        url={generateUrlSelect("secondSelect")}
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
