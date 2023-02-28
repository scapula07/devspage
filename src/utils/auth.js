import { AddressState } from "../recoil/globalState"
import detectEthereumProvider from "@metamask/detect-provider";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ethers } from 'ethers'

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
    