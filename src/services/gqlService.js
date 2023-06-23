import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { apiUrl } from "@/shared/constants/config";

export const client = new ApolloClient({
  uri: apiUrl + "/graphql",
  cache: new InMemoryCache(),
  ssrMode: false,
});

export const GET_MAIN_PAGE = gql`
  query ($lang: I18NLocaleCode) {
    journals(sort: "date:desc", locale: $lang, pagination: { limit: 3 }) {
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
    news(sort: "date:desc", locale: $lang, pagination: { limit: 9 }) {
      data {
        id
        attributes {
          title
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
    articles(
      filters: { popular: { eq: true } }
      sort: "createdAt:desc"
      locale: $lang
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
    reports(sort: "createdAt:desc", locale: $lang, pagination: { limit: 15 }) {
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
  query ($lang: I18NLocaleCode) {
    journals(sort: "date:desc", locale: $lang) {
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
  query ($slug: String, $lang: I18NLocaleCode) {
    journals(locale: $lang, filters: { slug: { eq: $slug } }) {
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
  query ($limit: Int, $start: Int, $lang: I18NLocaleCode) {
    news(
      sort: "date:desc"
      locale: $lang
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
export const GET_ONE_NEW = gql`
  query ($slug: String, $lang: I18NLocaleCode) {
    news(locale: $lang, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          date
          slug
          description
          photo {
            data {
              attributes {
                url
              }
            }
          }
          authors_title
          authors {
            data {
              id
              attributes {
                name
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
      }
    }
  }
`;

export const GET_ONE_ARTICLE = gql`
  query ($slug: String, $lang: I18NLocaleCode) {
    articles(locale: $lang, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          rubric
          title
          index_DOI
          quotation_link
          pdf_ru_page
          pdf_en_page
          annotation
          keywords
          photo {
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
                slug
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
  }
`;
export const GET_ARTICLES_BY_RUBRIC = gql`
  query ($rubric: String, $noSlug: String, $lang: I18NLocaleCode) {
    articles(
      locale: $lang
      filters: { rubric: { eq: $rubric }, not: { slug: { eq: $noSlug } } }
    ) {
      data {
        id
        attributes {
          rubric
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
  }
`;

export const GET_REPORTS = gql`
  query ($limit: Int, $start: Int, $lang: I18NLocaleCode) {
    reports(
      sort: "createdAt:desc"
      locale: $lang
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

export const GET_ONE_REPORT = gql`
  query ($slug: String, $lang: I18NLocaleCode) {
    reports(locale: $lang, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          photos {
            data {
              id
              attributes {
                url
                caption
              }
            }
          }
          journal {
            data {
              attributes {
                number
                slug
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
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query ($limit: Int, $start: Int, $lang: I18NLocaleCode) {
    authors(
      sort: ["order:desc", "role"]
      locale: $lang
      pagination: { limit: $limit, start: $start }
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        attributes {
          order
          name
          slug
          role
          description
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

export const GET_ONE_AUTHOR = gql`
  query ($slug: String, $lang: I18NLocaleCode) {
    authors(locale: $lang, filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          slug
          role
          description
          quote
          email
          photo {
            data {
              attributes {
                url
              }
            }
          }
          news(sort: "date:desc") {
            data {
              id
              attributes {
                title
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
          articles {
            data {
              id
              attributes {
                slug
                rubric
                title
                pdf_ru_page
                pdf_en_page
                journal {
                  data {
                    attributes {
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
      }
    }
  }
`;
