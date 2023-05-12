import {ChangeEvent, useEffect, useState} from "react";
import {formsObject, State} from "../../../type";
import {useAsyncFn} from "react-use";
import {fetchCountries} from "../../../requests";

export const useFilter = () => {
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

    return {
        onChange,
        state
    }
}