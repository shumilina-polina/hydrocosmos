import { ReportCart } from "@/components/ReportCart";
import { colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  & > figure {
    margin-bottom: 80px;
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
      }
      & > h3 {
        color: ${colors.black};
        text-align: right;
      }
    }
    & > div {
      margin-bottom: 20px;
      position: relative;
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
    &:first-child {
      width: 49%;
      & > div {
        height: 386px;
      }
    }
    &:nth-child(2) {
      width: 32%;
      & > div {
        height: 253px;
      }
    }
  }
  &:nth-child(2n) {
    & > figure {
      &:first-child {
        width: 32%;
        & > div {
          height: 253px;
        }
      }
      &:nth-child(2) {
        width: 49%;
        & > div {
          height: 386px;
        }
      }
    }
  }
`;

export const ReportsBox = ({ data }) =>
  data.map(
    (cart, i, arr) =>
      i % 2 == 0 && (
        <Box key={cart.id}>
          <ReportCart cart={cart} />
          {arr[i + 1] && <ReportCart cart={arr[i + 1]} />}
        </Box>
      )
  );
