import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../../shared/AsyncSelect";
import { useAsyncFn } from 'react-use';
import { fetchCountries } from "../../requests";
import { formsObject, Posts, State } from '../../type'
// @ts-ignore
import qs from 'qs';

export default function TrainingAsyncSelect() {
    const [state, setState] = useState<any>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetchCountries);

    const onOptionChange = (newValue: Posts, { name }: Posts) => {
        setState((state: any) => ({...state, [name]: newValue}))
    };

    useEffect(() => {
        setState((state: any) => ({ ...state, secondSelect: "" }));
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
                    url={`countries`}
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
                    url={`cities?${qs.stringify({ countryId: state.firstSelect.id })}`}
                    urlFilter="name"
                    onChange={onOptionChange}
                    optionValue="name"
                    optionLabel="name"
                    className={'selectContainer'}
                />
                <AsyncSelect
                    name="thirdSelect"
                    placeholder="third"
                    url={`countries`}
                    urlFilter="name"
                    onChange={onOptionChange}
                    optionValue="name"
                    optionLabel="name"
                    className={'selectContainer'}
                />
                <AsyncSelect
                    name="fifthSelect"
                    placeholder="fifth"
                    url={`countries`}
                    urlFilter="name"
                    onChange={onOptionChange}
                    optionValue="name"
                    optionLabel="name"
                    className={'selectContainer'}
                />
                <AsyncSelect
                    name="sixSelect"
                    placeholder="six"
                    url={`countries`}
                    urlFilter="name"
                    onChange={onOptionChange}
                    optionValue="name"
                    optionLabel="name"
                    className={'selectContainer'}
                />
                <AsyncSelect
                    name="sevenSelect"
                    placeholder="seven"
                    url={`countries`}
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
