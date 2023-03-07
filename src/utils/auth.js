import { AddressState } from "../recoil/globalState"
import detectEthereumProvider from "@metamask/detect-provider";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ethers } from 'ethers'
import { useMutation } from "@apollo/client";

export function useAuth() {
    const [address,setAddress]=useRecoilState(AddressState)
    const connectWallet = async () => {

        try {
			
			const detectedProvider =
				(await detectEthereumProvider()) 

		
			if (!detectedProvider) {
				throw new Error("Please install MetaMask!");
			}

		
			const provider = new ethers.providers.Web3Provider(window.ethereum);

		
			await provider.send("eth_requestAccounts", []);

		
			const signer = provider.getSigner();

		
			const address = await signer.getAddress();

			/* Set the providers in the state variables */
			// setProvider(web3Provider);

			/* Set the address in the state variable */
			setAddress(address);
			localStorage.setItem("address", address);

			return provider;
		} catch (error) {
			/* Throw the error */
			throw error;
		}
    }

		
    return{connectWallet}
}
    


export const usePkP=()=>{

	const mintPkpWithRelayer = async (credentialResponse) => {
		// console.log("Minting PKP with relayer...");
	
		// const mintRes = await fetch(`${RELAY_API_URL}/auth/google`, {
		//   method: "POST",
		//   headers: {
		// 	'Content-Type': 'application/json'
		//   },
		//   body: JSON.stringify({
		// 	idToken: credentialResponse.credential
		//   }),
		// });
	
		// if (mintRes.status < 200 || mintRes.status >= 400) {
		//   setStatus("Uh oh, something's not quite right.");
		//   return null;
		// } else {
		//   const resBody = await mintRes.json();
		//   setStatus("Successfully initiated minting PKP with relayer.")
		//   return resBody.requestId;
		// }
	  }
}