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