import {ChangeEvent, useEffect, useState} from "react";
import {SecondState, State} from "../type";

export const useFilter = (defaultValues: State | SecondState) => {
    const [state, setState] = useState<State | SecondState>(defaultValues);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({...prev, [e.target.name]: e?.target?.value}))
    };

    useEffect(() => {
        setState((prevState) => ({ ...prevState, secondSelect: null }));
    }, [state?.firstSelect?.id]);

    return {
        onChange,
        state
    }
}