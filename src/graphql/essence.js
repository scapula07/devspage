import { gql } from "@apollo/client";

export const CREATE_REGISTER_ESSENCE_TYPED_DATA = gql`
  mutation CreateRegisterEssenceTypedData(
    $input: CreateRegisterEssenceTypedDataInput!
  ) {
    createRegisterEssenceTypedData(input: $input) {
      typedData {
        id
        sender
        data
        nonce
      }
    }
  }
`;


export const ESSENCES_BY_FILTER = gql`
  query essencesByFilter($appID: String, $me: AddressEVM!) {
    essenceByFilter(appID: $appID) {
      essenceID
      tokenURI
      createdBy {
        avatar
        handle
        profileID
        metadata
      }
      collectMw {
        contractAddress
        type
      }
      isCollectedByMe(me: $me)
    }
  }
`;