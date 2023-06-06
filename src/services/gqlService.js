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
          slug
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
    news(sort: "date:desc", locale: "ru", pagination: { limit: 9 }) {
      data {
        id
        attributes {
          title
          date
          slug
          photos(pagination: { limit: 1 }) {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    articles(sort: "createdAt:desc", locale: "ru", pagination: { limit: 5 }) {
      data {
        id
        attributes {
          title
          slug
          heading
          authors {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
          journal {
            data {
              attributes {
                number
                slug
              }
            }
          }
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
    pair {
      data {
        attributes {
          logos {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
    reports(sort: "createdAt:desc", locale: "ru", pagination: { limit: 15 }) {
      data {
        id
        attributes {
          title
          photos(pagination: { limit: 1 }) {
            data {
              attributes {
                url
              }
            }
          }
          journal {
            data {
              attributes {
                number
              }
            }
          }
        }
      }
    }
    slider {
      data {
        attributes {
          slider {
            data {
              id
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
