import { gql } from "@apollo/client";

export const LOGIN_VERIFY = gql`
    mutation LoginVerify($input: LoginVerifyInput!) {
        loginVerify(input: $input) {
            accessToken
        }
    }
`;



export const LOGIN_GET_MESSAGE = gql`
    mutation LoginGetMessage($input: LoginGetMessageInput!) {
        loginGetMessage(input: $input) {
            message
        }
    }
`;


export const GET_PROFILE= gql`
    query getProfileByHandle($handle: String!){
      profileByHandle(handle: $handle) {
        metadataInfo {
          avatar
          bio
        }
        owner {
          address
        }
        isPrimary
      }
    }



`


export const PRIMARY_PROFILE = gql`
  query PrimaryProfile($address: AddressEVM!) {
    address(address: $address) {
      wallet {
        primaryProfile {
          id
          profileID
          handle
          metadata
          avatar
          isPrimary
        }
      }
    }
  }
`;