import { ethers } from "ethers";
import { FakeNefturiansABI } from '../../smartContract/smartContract';
import { useState, useEffect  } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const FakeNefturiansWallet = () => {
    const [state, setState] = useState({});
    const {address } = useParams();
    const navigate = useNavigate();

    let tokenData = [];

    const contractData = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const fakeNefturiansAddress="0x9bAADf70BD9369F54901CF3Ee1b3c63b60F4F0ED";
            const ct = new ethers.Contract(fakeNefturiansAddress, FakeNefturiansABI.abi, signer);
            const tokenBalance = await ct.balanceOf(address);
            let tmpTokendata = [];
            for (let index = 0; index < tokenBalance; index++) {
                const id = await ct.tokenOfOwnerByIndex(address, index);
                const metadata = await GetMetadata(ct, id)
                // console.log( metadata)
                tmpTokendata.push(metadata);
            }
            setState({tokenData: tmpTokendata, contract: ct, Status: 'success'});
            // console.log('tmp: '+tmpTokendata[0].imageURI);
            
        } catch (error) {
            console.log(error); 
            setState({Status: 'error'}); 
        };
    }

    const GetMetadata = async (ct, tokenID) => {
        const tokenURI = await ct.tokenURI(tokenID);
        const id = tokenID;
        let imageURI, imageName, imageDescription;
        await fetch(tokenURI)
        .then(response => response.json())
        .then(data => {
            
            imageURI = (data.image).includes('ipfs') ? (data.image).replace('ipfs://', 'https://ipfs.io/ipfs/'): data.image;
            imageName = data.name;
            imageDescription = data.description;
            let newData = true;
            for (let index = 0; index < tokenData.length; index++) {
                if (tokenData[index].imageURI === imageURI){
                    newData = false;
                    break;
                }
            }
            if (newData){
                tokenData.push({imageURI: imageURI, imageName: imageName, imageDescription: imageDescription, tokenID: id});
                // console.log('meta : '+id);
            }
        })
        .catch(error => {
            console.log(error);
        });
        return {imageURI: imageURI, imageName: imageName, imageDescription: imageDescription, tokenID: id.toString()};
    }

    useEffect(()=>{
        contractData();
    },[]);

    return (
        <>
            <h1 className="pageTitle">Fake Nefturians</h1>
            {/* {state.Status === 'success' && <p className="alertMsg">{state.tokenData.length}</p>} */}
            {state.Status === 'success' && state.tokenData.map((data,index) =>
               
                <>
                <div className="section">
                    <div className="box small">
                        <h3 className="subtitle">ID du Token :</h3>
                        <p className="alertMsg" key={index}>{data.tokenID}</p>
                    </div>
                    <div className="box small">
                        <h3 className="subtitle">Nom du Token :</h3>
                        <p className="alertMsg" key={index}>{data.imageName}</p>
                    </div>
                    <div className="box small">
                        <h3 className="subtitle">Description :</h3>
                        <p className="alertMsg" key={index}>{data.imageDescription}</p>
                    </div>
                    <div className="box small">
                        <h3 className="subtitle">Image :</h3>
                        <img src={data.imageURI} alt="" className="ipfsImage" key={index}/>
                    </div>
                </div>
                </>
            )}

            {state.Status === 'address error' && <div className="MenuSection">
                <div className="box small">
                    <p>Sorry, there was an error ;)</p>
                </div>
                <button className="button" onClick={() => navigate("/")}>Menu</button>
            </div>}
        </>
    )
}
export default FakeNefturiansWallet;