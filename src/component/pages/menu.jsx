import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <>
        <h1 className="pageTitle">Menu</h1>
        <div className="MenuSection">
            <button className="button" onClick={() => navigate("/ChainInfo")}>Chain Info</button>
            <button className="button" onClick={() => navigate("/fakeBayc")}>fakeBayc</button>
            <button className="button" onClick={() => navigate("/fakeNefturians")}>fakeNefturians</button>
            <button className="button" onClick={() => navigate("/fakeMeebits")}>fakeMeebits</button>
        </div>
        </>
        
    )
};

export default Menu;