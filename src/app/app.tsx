import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import TrainingAsyncSelect from "../pages/TrainingAsyncSelect/TrainingAsyncSelect"
import SecondTrainingAsyncSelect from "../pages/SecondTrainingAsyncSelect/SecondTrainingAsyncSelect";
import TrainingReactHookForm from "../pages/TrainingReactHookForm/TrainingReactHookForm";

export default function App() {

    return (
        <>
            <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route path="trainingAsyncSelect" element={<TrainingAsyncSelect/>} />
                   <Route path="secondTrainingAsyncSelect" element={<SecondTrainingAsyncSelect/>} />
                   <Route path="trainingReactHookForm" element={<TrainingReactHookForm/>} />
               </Route>
            </Routes>
        </>
    );
}
