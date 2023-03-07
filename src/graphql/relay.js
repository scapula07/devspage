import { gql } from "@apollo/client";

export const RELAY = gql`
  mutation Relay($input: RelayInput!) {
    relay(input: $input) {
      relayActionId
    }
  }
`;




export const RELAY_ACTION_STATUS = gql`
  query RelayActionStatus($relayActionId: ID!) {
    relayActionStatus(relayActionId: $relayActionId) {
      ... on RelayActionStatusResult {
        txHash
        txStatus
      }
      ... on RelayActionError {
        reason
        lastKnownTxHash
      }
      ... on RelayActionQueued {
        queuedAt
      }
    }
  }
`;
