import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <>
        <h1 className="pageTitle">Menu</h1>
        <div className="MenuSection">
            <button className="button" onClick={() => navigate("/erc721_ux/ChainInfo")}>Chain Info</button>
            <button className="button" onClick={() => navigate("/erc721_ux/fakeBayc")}>fakeBayc</button>
            <button className="button" onClick={() => navigate("/erc721_ux/fakeNefturians")}>fakeNefturians</button>
            <button className="button" onClick={() => navigate("/erc721_ux/fakeMeebits")}>fakeMeebits</button>
        </div>
        <div className="MenuSection"><p>(You can click on my name at the top of every page to go back here)</p></div>
        </>
        
    )
};

export default Menu;