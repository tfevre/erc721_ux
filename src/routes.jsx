import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Menu from './component/pages/menu';
import ChainInfo from "./component/pages/chain-info";
import FakeBayc from './component/pages/FakeBayc';
import FakeBaycToken from './component/pages/FakeBaycToken';
import FakeNefturians from './component/pages/FakeNefturians';
import FakeNefturiansWallet from './component/pages/FakeNefturiansWallet';
import FakeMeebits from './component/pages/FakeMeebits';
import Error from "./component/pages/Error";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/erc721_ux/' element={<Menu />} />
            <Route path='/' element={<Menu />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/erc721_ux/ChainInfo' element={<ChainInfo />} />
            <Route path='/erc721_ux/fakeBayc' element={<FakeBayc />} />
            <Route path='/erc721_ux/fakeBayc/:token_id' element={<FakeBaycToken />} />
            <Route path='/erc721_ux/fakeNefturians' element={<FakeNefturians />} />
            <Route path='/erc721_ux/fakeNefturians/:address' element={<FakeNefturiansWallet />} />
            <Route path='/erc721_ux/fakeMeebits' element={<FakeMeebits />} />
            <Route path='/erc721_ux/Error' element={<Error />} />
        </Routes>
    )
};

export default AppRoutes;