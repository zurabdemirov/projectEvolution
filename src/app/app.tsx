import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import axios from "axios";

const formsObject = {
    firstSelect: "",
    secondSelect: ""
};

interface PostsType {
    id: number,
    name:  string | undefined,
    surname: string,
    userId: number,
}

export interface StateType {
    firstSelect?: "" | PostsType,
    secondSelect?: "" | PostsType
}

export default function App() {
    const [state, setState] = useState<{ firstSelect: string; secondSelect: string; }>(formsObject);
    const [posts, setPosts] = useState<PostsType[]>([]);
    // console.log("state@@@", state);
    // console.log("posts@@@", posts);

    const onOptionChange = (newValue: PostsType, actionMeta: any) => {
        console.log("newValue@@@", newValue);
        console.log("actionMeta@@@", actionMeta);
        setState({
            ...state,
            [actionMeta.name]: newValue
        });
    };

    useEffect(() => {
        setState({ ...state, secondSelect: "" });
    }, [state.firstSelect]);

    const fetchPost = async () => {
        try {
            const response = await axios(`http://localhost:3001/posts?${state.firstSelect?.param}=${state.secondSelect?.id}`);

            setPosts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=> {
        fetchPost();
    }, [state])

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
                        url="http://localhost:3001/posts"
                        urlFilter="param"
                        getOptionValue={({ param }: { param: string; }) => param}
                        getOptionLabel={({ param }: { param: string; }) => param}
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
                        url="http://localhost:3001/posts"
                        urlFilter="surname"
                        getOptionValue={({ surname }: { surname: string; }) => surname}
                        getOptionLabel={({ surname }: { surname: string; }) => surname}
                        onChange={onOptionChange}
                        defaultOptions
                        state={state}
                    />
                </div>

                {posts.map((user) => {
                  return  <div key={user?.id}>{user?.name} {user?.surname}</div>
                        })}
            </div>
        </>
    );
}
