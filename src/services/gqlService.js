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
    articles(
      filters: { popular: { eq: true } }
      sort: "createdAt:desc"
      locale: "ru"
      pagination: { limit: 5 }
    ) {
      data {
        id
        attributes {
          title
          slug
          rubric
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
          slug
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

export const GET_JOURNALS = gql`
  query {
    journals(sort: "date:desc", locale: "ru") {
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
  }
`;

export const GET_ONE_JOURNAL = gql`
  query ($slug: String) {
    journals(locale: "ru", filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          number
          date
          slug
          ISSN
          eISSN
          Elibrary_EDN
          about
          reports {
            data {
              id
              attributes {
                title
                slug
                journal {
                  data {
                    attributes {
                      number
                      slug
                    }
                  }
                }
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
          articles {
            data {
              id
              attributes {
                slug
                rubric
                title
                pdf_ru_page
                pdf_en_page
                photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                authors {
                  data {
                    id
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
          pdf_ru {
            data {
              attributes {
                url
              }
            }
          }
          pdf_en {
            data {
              attributes {
                url
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
  }
`;

export const GET_NEWS = gql`
  query ($limit: Int, $start: Int) {
    news(
      sort: "date:desc"
      locale: "ru"
      pagination: { limit: $limit, start: $start }
    ) {
      meta {
        pagination {
          total
        }
      }
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
  }
`;

export const GET_REPORTS = gql`
  query ($limit: Int, $start: Int) {
    reports(
      sort: "createdAt:desc"
      locale: "ru"
      pagination: { limit: $limit, start: $start }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          title
          slug
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
  }
`;
