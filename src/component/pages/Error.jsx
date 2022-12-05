import { useNavigate } from 'react-router-dom';
const Error = () => {
    
    const navigate = useNavigate();

    const navigateToHome = () => {
        // navigate to /
        navigate('/erc721_ux/');
    };

    return (
        <>
            <div className="section">
                <p>You are on the wrong network ! </p>
                <button className="button" onClick={navigateToHome}>Try Again</button>
            </div>           
        </>
    );
};

export default Error;