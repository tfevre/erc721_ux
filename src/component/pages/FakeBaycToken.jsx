import { ethers } from "ethers";
import { FakeBAYCABI } from '../../smartContract/smartContract';
import { useState, useEffect  } from "react";
import { useParams } from 'react-router-dom';

const FakeBaycToken = () => {
    const [state, setState] = useState({});
    const {token_id } = useParams();

    const contractData = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const fakeBaycAddress="0x1dA89342716B14602664626CD3482b47D5C2005E";
            const ct = new ethers.Contract(fakeBaycAddress, FakeBAYCABI.abi, signer);
            const tokenURI = await ct.tokenURI(parseInt(token_id));
            fetch(tokenURI)
            .then(response => response.json())
            .then(data => {
               let imageHash = (data.image).replace('ipfs://', '');
               fetch('https://ipfsbrowser.com/?hash='+imageHash).then(response => response.json())
               .then(imageData => {
                    console.log(imageData);
               })
            })
            .catch(error => {
                console.log('errror fetch')
            });
            ;
            setState({signer: signer, contract: ct});
        } catch (error) {
            console.log(error);  
        };
    }

    useEffect(()=>{
        contractData();
    },[]);

    return (
        <>
            <h1 className="pageTitle">Fake Bayc</h1>
            
            {state.contractName && <div className="section">
                <div className="box small">
                    <h3 className="subtitle">Nom du contract :</h3>
                    <p className="alertMsg">{state.contractName || ""}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Symbole du contract :</h3>
                    <p className="alertMsg">{state.contractSymbol || ""}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Total supply :</h3>
                    <p className="alertMsg">{state.totalSupply || ""}</p>
                </div>
            </div>} 
        </>
    )
}
export default FakeBaycToken;