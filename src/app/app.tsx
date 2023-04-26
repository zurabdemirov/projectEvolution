import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import TrainingAsyncSelect from "../pages/AsyncSelect/AsyncSelect"
import TrainingReactHookForm from "../pages/ReactHookForm/ReactHookForm";

export default function App() {

    return (
        <>
            <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route path="trainingAsyncSelect" element={<TrainingAsyncSelect/>} />
                   <Route path="trainingReactHookForm" element={<TrainingReactHookForm/>} />
               </Route>
            </Routes>
        </>
    );
}
