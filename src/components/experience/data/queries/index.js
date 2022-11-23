import { gql } from 'apollo-boost';

export const GET_EXPERIENCES = gql`
  query {
    experiences {
      name
      displayName
      position
      descriptions
      techIds
      techValues {
        name
        displayName
      }
      workUrl
      period
      details {
        flipEffect
        flipIconBackStyle
        isDynamic
      }
    }
  }
`;
