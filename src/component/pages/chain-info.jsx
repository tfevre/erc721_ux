import { useState } from "react";
import { ethers } from "ethers";
import { Navigate } from 'react-router-dom';


const Home = () => {
    const [state, setState] = useState({});

    const connect = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();
            const network = await provider.getNetwork();
            const lastBlock = await provider.getBlockNumber();
            const networkName = network.name;
            const chainId = network.chainId;   
            setState({providerData: {networkName, lastBlock, chainId, signerAddress}, provider, signer});
        } catch (error) {
          console.log(error);
          setState({error: "une erreur est survenue"});
        };
    };

    if (state.providerData && state.providerData.networkName !== 'sepolia'){
        return (
            <Navigate replace to="/Error" />
        )
        
    }else {
        return (
            <>
                <div className="section">
                    <button className="button" onClick={connect}>Connecter Metamask</button>
                </div>
                {state.error && <div className="section">
                    <div className="box">
                        <p className="alertMsg">{state.error}</p>
                    </div>
                </div>}
                {state.providerData && 
                    <>
                        <div className="section">
                            <div className="box small">
                                <h3 className="subtitle">Nom du réseau :</h3>
                                <p className="alertMsg">{state.providerData.networkName}</p>
                            </div>
                            <div className="box small">
                                <h3 className="subtitle">Dernier block :</h3>
                                <p className="alertMsg">{state.providerData.lastBlock}</p>
                            </div>
                            <div className="box small">
                                <h3 className="subtitle">Chain id :</h3>
                                <p className="alertMsg">{state.providerData.chainId}</p>
                            </div>
                            <div className="box small">
                                <h3 className="subtitle">Wallet :</h3>
                                <p className="alertMsg">{state.providerData.signerAddress}</p>
                            </div>
                        </div>
                    </>
                }
            </>
        );
    }
    
};

export default Home;