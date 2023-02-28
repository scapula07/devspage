import axios from "axios";

const apiKey =  "3813aad7e7c3468e4710";
const apiSecret = "ee8a5ade4f605b07264b37c1c7d959ec9c953d8589df610bd50f9145688b71f2";


export const uploadToIPFSJson = async (metadata,hash) => {
  
    const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
     
     const data = JSON.stringify({metadata,
                                   avaterUrl:`https://gateway.pinata.cloud/ipfs/${hash}`
                                   }
                                  
                                  )
    return axios
        .post(url, data, {
            headers: {
                "Content-Type": "application/json",
                pinata_api_key: apiKey,
                pinata_secret_api_key: apiSecret,
            },
        })
        .then((response) => response.data.IpfsHash)
        .catch((error) => {
            throw error;
        });
};

export const uploadToIPFSFile = async (file) => {

    console.log(file,"pin")
  
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    let formData = new FormData();
    formData.append('file',file)

      const fileHash = await axios
                       .post(url, 
                            formData,
                       
                       {
                           headers: {
                          "Content-Type": "multipart/form-data",
                            pinata_api_key: apiKey,
                            pinata_secret_api_key: apiSecret,
                         },
                    }) 

                 
      return fileHash?.data?.IpfsHash
};