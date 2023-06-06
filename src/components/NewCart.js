import { apiUrl } from "@/shared/constants/config";
import { breakpoints } from "@/styles/variables/variables";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";
import "moment/locale/ru";
import moment from "moment/moment";

const ImageWrapper = styled.div`
  transition: opacity 0.3s;
  height: 246px;
  width: 100%;
  margin-bottom: 16px;
  overflow: hidden;
  & img {
    transition: transform 0.3s;
  }
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 24px;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  box-orient: vertical;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    & ${ImageWrapper} {
      opacity: 0.8;
      & img {
        transform: scale(1.1);
      }
    }
    & ${Text} {
      text-decoration: underline;
    }
  }
  @media ${breakpoints.mobile} {
    min-height: auto;
  }
`;

const Date = styled.span`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.03em;
  opacity: 0.8;
`;

export const NewCart = ({ cart }) => (
  <Wrapper>
    <div>
      <ImageWrapper>
        <img src={apiUrl + cart.photos.data[0]?.attributes?.url} alt="New" />
      </ImageWrapper>
      <Text>
        <ReactMarkdown>{cart.title}</ReactMarkdown>
      </Text>
    </div>
    <Date>
      {moment(cart.date)
        .locale("ru")
        // .locale("en")
        .format("DD MMMM YYYY")}
    </Date>
  </Wrapper>
);
