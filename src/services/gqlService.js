import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { apiUrl } from "@/shared/constants/config";

export const client = new ApolloClient({
  uri: apiUrl + "/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export const GET_MAIN_PAGE = gql`
  query {
    journals(sort: "date:desc", locale: "ru", pagination: { limit: 3 }) {
      data {
        id
        attributes {
          number
          date
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
