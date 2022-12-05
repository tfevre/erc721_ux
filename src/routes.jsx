import React from 'react';
import { Route, Routes, DefaultRoute } from "react-router-dom";
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
            <DefaultRoute handler={<Menu />} />
            <Route path='/erc721_ux/' element={<Menu />} />
            <Route path='/' element={<Menu />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path='/ChainInfo' element={<ChainInfo />} />
            <Route path='/fakeBayc' element={<FakeBayc />} />
            <Route path='/fakeBayc/:token_id' element={<FakeBaycToken />} />
            <Route path='/fakeNefturians' element={<FakeNefturians />} />
            <Route path='/fakeNefturians/:address' element={<FakeNefturiansWallet />} />
            <Route path='/fakeMeebits' element={<FakeMeebits />} />
            <Route path='/Error' element={<Error />} />
        </Routes>
    )
};

export default AppRoutes;