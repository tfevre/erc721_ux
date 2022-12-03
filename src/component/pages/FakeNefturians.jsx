import { ethers } from "ethers";
import { FakeNefturiansABI } from '../../smartContract/smartContract';
import { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';

const FakeNefturians = () => {
    const [state, setState] = useState({});
    const navigate = useNavigate();


    const contractData = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const fakeNefturiansAddress="0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED";
            const ct = new ethers.Contract(fakeNefturiansAddress, FakeNefturiansABI.abi, signer);
            const name = await ct.name();
            const symbol = await ct.symbol();
            let price = await ct.tokenPrice();
            price = ethers.utils.formatEther(price);
            setState({signer: signer, contractName: name, contractSymbol: symbol, contract: ct, price: price});
        } catch (error) {
            console.log(error);  
        };
    }

    useEffect(()=>{
        contractData();
    },[]);

    const buyAToken = async () =>{
        if (await state.signer){
            let price = state.price + 1;
            await state.contract.buyAToken({value: ethers.utils.parseEther(price)});
        }else{
            contractData();
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        const userAddress = target.userAddress.value === '' ? await state.signer.getAddress() : target.userAddress.value;
        navigate("/FakeNefturians/"+userAddress);
    };

    return (
        <>
            <h1 className="pageTitle">Fake Nefturians</h1>
            
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
                    <h3 className="subtitle">Prix du token ($ETH):</h3>
                    <p className="alertMsg">{state.price || ""}</p>
                </div>
            </div>} 

            <div className="section">
                {state.signer && <button className="button" onClick={buyAToken}>Buy your NFT</button>}
                <form className="box" onSubmit={submit}>
                    <h3 className="subtitle">See wallet portfolio :</h3>
                    <input type="text" id="userAddress" name="userAddress" className="input" placeholder="Any address (leave empty for your curent wallet)"/>
                    <button type="submit" className="button">Valider</button>
                </form>
            </div>
        </>
    );
};

export default FakeNefturians;