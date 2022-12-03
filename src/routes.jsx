import React from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from './component/pages/menu';
import ChainInfo from "./component/pages/chain-info";
import Error from "./component/pages/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/ChainInfo' element={<ChainInfo />} />
            <Route path='/Error' element={<Error />} />
        </Routes>
    )
};

export default AppRoutes;