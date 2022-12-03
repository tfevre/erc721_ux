import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="nav">
                <h1 onClick={() => navigate("/")}>THOMAS FEVRE | A4 ESILV FINTECH</h1>
            </nav>
        </>
    );
};

export default Nav;