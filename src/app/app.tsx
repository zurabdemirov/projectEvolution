import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import axios from "axios";

const formsObject = {
    firstSelect: "",
    secondSelect: ""
};

interface PostsType {
    id: number,
    name:  string
}

export interface StateType {
    firstSelect?: "" | PostsType,
    secondSelect?: "" | PostsType
}

export default function App() {
    const [state, setState] = useState<any>(formsObject);
    const [url, setUrl] = useState({link:''})
    const [posts, setPosts] = useState<PostsType[]>([]);
    // console.log("url@@@", url);
    // console.log("state@@@", state);
    // console.log("posts@@@", posts);

    const onOptionChange = (newValue: PostsType, actionMeta: any) => {
        // console.log("newValue@@@", newValue);
        // console.log("actionMeta@@@", actionMeta);
        setState((state: any) => ({...state, [actionMeta.name]: newValue}))
    };

    useEffect(() => {
        setState({ ...state, secondSelect: "" });
    }, [state.firstSelect.id]);

    const fetchPost = async () => {
        try {
            const response = await axios(url.link);

            setPosts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=> {
        fetchPost();
    }, [state])

    useEffect(() => {
        let localUrl = `http://localhost:3001/`
        if(state.firstSelect.id){
            setUrl( {...url, link: `${localUrl}` + `countries?=${String(state.firstSelect.id)}`})
        }
        if(state.firstSelect.id && state.secondSelect.id){
            setUrl( {...url, link: `${url.link.slice(0,34)}&cities=${String(state.secondSelect.id)}`})
        }
    }, [state.firstSelect, state.secondSelect]);

    return (
        <>
            <div className='app'>
                <div className='selectContainer'>
                    <AsyncSelect
                        id="firstSelect"
                        name="firstSelect"
                        value={state.firstSelect}
                        cacheOptions
                        placeholder="first"
                        url="http://localhost:3001/countries"
                        urlFilter="name"
                        getOptionValue={({ name }: { name: string; }) => name}
                        getOptionLabel={({ name }: { name: string; }) => name}
                        onChange={onOptionChange}
                        defaultOptions
                        state={state}
                    />
                </div>
                <div className='selectContainer'>
                    <AsyncSelect
                        id="secondSelect"
                        name="secondSelect"
                        value={state.secondSelect}
                        cacheOptions
                        placeholder="second"
                        url="http://localhost:3001/cities"
                        urlFilter="name"
                        getOptionValue={({ name }: { name: string; }) => name}
                        getOptionLabel={({ name }: { name: string; }) => name}
                        onChange={onOptionChange}
                        defaultOptions
                        state={state}
                    />
                </div>

                {/*{posts.map((user) => {*/}
                {/*  return  <div key={user?.id}>{user?.name}</div>*/}
                {/*        })}*/}
            </div>
        </>
    );
}
