import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/chain-info";
import Error from "./component/pages/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Error' element={<Error />} />
        </Routes>
    )
};

export default AppRoutes;