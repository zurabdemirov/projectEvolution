import {ChangeEvent, useEffect, useState} from "react";
import {State} from "../type";
import {useAsyncFn} from "react-use";

export const useFilter = (formsObject: any, fetch: any) => {
    const [state, setState] = useState<State>(formsObject);
    const [{value, error}, getCountries] = useAsyncFn(fetch);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev: State) => ({...prev, [e.target.name]: e?.target?.value}))
    };

    useEffect(() => {
        setState((prevState) => ({ ...prevState, secondSelect: null }));
    }, [state?.firstSelect?.id]);

    useEffect(()=> {
        getCountries();
    }, [])

    return {
        onChange,
        state
    }
}