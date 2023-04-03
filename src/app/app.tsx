// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from "react";
import { AsyncSelect } from "../shared/AsyncSelect";
import axios from "axios";

const formsObject = {
    inp: "",
    firstSelect: "",
    secondSelect: ""
};

export default function App() {
    const [state, setState] = useState(formsObject);
    const [posts, setPosts] = useState([]);
    console.log("state@@@", state);
    console.log("posts@@@", posts);

    const onOptionChange = (newValue, actionMeta) => {
        // console.log("newValue", newValue);
        // console.log("actionMeta", actionMeta);
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
            const response = await axios(`http://localhost:3001/posts?id=${state.firstSelect.id}`);

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
                        urlFilter="name"
                        getOptionValue={({ name }) => name}
                        getOptionLabel={({ name }) => name}
                        onChange={onOptionChange}
                        defaultOptions
                        state={state}
                    />
                </div>
                {/*<div className='selectContainer'>*/}
                {/*    <AsyncSelect*/}
                {/*        id="secondSelect"*/}
                {/*        name="secondSelect"*/}
                {/*        value={state.secondSelect}*/}
                {/*        cacheOptions*/}
                {/*        placeholder="second"*/}
                {/*        url="http://localhost:3001/posts"*/}
                {/*        urlFilter="surname"*/}
                {/*        getOptionValue={({ surname }) => surname}*/}
                {/*        getOptionLabel={({ surname }) => surname}*/}
                {/*        onChange={onOptionChange}*/}
                {/*        defaultOptions*/}
                {/*        state={state}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*{posts.filter((user) => {*/}
                {/*    return user?.name === state.firstSelect?.name*/}
                {/*})}*/}
                {posts.map((user) => {
                  return  <div key={user?.id}>{user?.name} {user?.surname}</div>
                        })}
            </div>
        </>
    );
}
