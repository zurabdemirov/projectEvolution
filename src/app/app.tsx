import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import TrainingAsyncSelect from "../pages/AsyncSelect/AsyncSelect"

export default function App() {

    return (
        <>
            <Routes>
               <Route path='/' element={<Layout/>}>
                   <Route path="trainingAsyncSelect" element={<TrainingAsyncSelect/>} />
               </Route>
            </Routes>
        </>
    );
}
