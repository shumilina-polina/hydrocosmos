import { ReportCart } from "@/components/ReportCart";
import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";

export const ReportsBox = ({ data }) =>
  data.map(
    (cart, i, arr) =>
      i % 2 == 0 && (
        <Box key={cart.id}>
          <ReportCart cart={cart.attributes} />
          {arr[i + 1] && <ReportCart cart={arr[i + 1].attributes} />}
        </Box>
      )
  );

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media ${breakpoints.mobile} {
    flex-direction: column;
  }
  & > a {
    margin-bottom: 80px;
    display: block;

    @media ${breakpoints.mobile} {
      margin-bottom: 35px;
      width: 100% !important;
    }
    & > figure {
      width: 100%;
      height: 100%;
      &::after {
        display: none;
      }
      &:hover {
        & h3 {
          text-decoration: underline;
        }
        & > div {
          &::after {
            opacity: 1;
          }
        }
      }
      & > figcaption {
        position: static;
        opacity: 1;
        & > div {
          margin-bottom: 13px;
          ${fonts.inter7}
          @media ${breakpoints.tablet} {
            margin-bottom: 5px;
          }
        }
        & > h3 {
          color: ${colors.black};
          text-align: right;
        }
      }
      & > div {
        margin-bottom: 20px;
        position: relative;
        @media ${breakpoints.tablet} {
          margin-bottom: 5px;
        }
        &::after {
          transition: opacity 0.3s;
          opacity: 0;
          pointer-events: none;
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
      & img {
        min-width: 100%;
        height: 100%;
      }
    }
    &:first-child {
      width: 49%;
      & > figure > div {
        height: 386px;
        @media ${breakpoints.laptop} {
          height: auto;
        }
      }
    }
    &:nth-child(2) {
      width: 32%;
      @media ${breakpoints.laptop} {
        width: 40%;
      }
      & > figure > div {
        height: 253px;
        @media ${breakpoints.laptop} {
          height: auto;
        }
      }
    }
  }
  &:nth-child(2n) {
    & > a {
      &:first-child {
        width: 32%;
        @media ${breakpoints.laptop} {
          width: 40%;
        }
        & > figure > div {
          height: 253px;
          @media ${breakpoints.laptop} {
            height: auto;
          }
        }
      }
      &:nth-child(2) {
        width: 49%;

        & > figure > div {
          height: 386px;
          @media ${breakpoints.laptop} {
            height: auto;
          }
        }
      }
    }
  }
`;
