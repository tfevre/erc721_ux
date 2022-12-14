import { ethers } from "ethers";
import { FakeMeebitsABI, FakeMeebitsClaimerABI } from '../../smartContract/smartContract';
import { useState, useEffect  } from "react";

import signatures from '../../signatures/output-sig.json';

const FakeMeebits = () => {
    const [state, setState] = useState({});
    const [statuss, setStatus] = useState("");


    const contractData = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const fakeMeebitsAddress="0xD1d148Be044AEB4948B48A03BeA2874871a26003";
            const ct = new ethers.Contract(fakeMeebitsAddress, FakeMeebitsABI.abi, signer);
            const name = await ct.name();
            const symbol = await ct.symbol();
            const totalSupplyBn = await ct.totalSupply();
            const totalSupply = ethers.utils.formatEther(totalSupplyBn);
            const newIDs = await getNewID(ct, totalSupply);
           
            setState({signer: signer, contractName: name, contractSymbol: symbol, contract: ct, ids: newIDs, totalSupply});
        } catch (error) {
            console.log(error);  
        };
    }

    // Return a list of non used ids
    const getNewID = async (ct, totalSupply) => {
        let unusedIDList = [];
        let usedIDList = [];
        for (let index = 0; index < totalSupply; index++) {
            let usedId = await ct.tokenByIndex(index);
            let randomId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            if (randomId !== usedId){
                unusedIDList.push(randomId);
            }
            usedIDList.push(usedId);
        }
        if (unusedIDList.length < 5){
            for (let index = 0; index < 10; index++) {
                let randomId = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
                if (!usedIDList.includes(randomId)){
                    unusedIDList.push(randomId);
                }
            } 
        }
        return unusedIDList;
    }

    useEffect(()=>{
        contractData();
    },[]);



    const submit = async (e) => {
        e.preventDefault();
        let id = document.getElementById('selectID').value;
        let sig = signatures[id].signature;
        if (await state.signer){
            const fakeMeebitsClaimerAddress="0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55";
            const ct = new ethers.Contract(fakeMeebitsClaimerAddress, FakeMeebitsClaimerABI.abi, state.signer);
            console.log(await ct.claimAToken(id, sig));
        }else{
            contractData();
        }
    };

    return (
        <>
            <h1 className="pageTitle">Fake Meebits</h1>
            
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
            
            {state.ids && <div className="section">
                <form className="box" onSubmit={submit}>
                    <h3 className="subtitle">Choisissez un id pour votre nouvel NFT :</h3>
                    <select className="form-control" value={statuss} onChange={(e) => setStatus(e.target.value)} id='selectID'>
                        {state.ids.map((data,index) =>
                            <option value={data} key={index}>{data}</option>
                        )}
                    </select>
                    <button type="submit" className="button">Mint</button>
                </form>
            </div>}
        </>
    );
};

export default FakeMeebits;