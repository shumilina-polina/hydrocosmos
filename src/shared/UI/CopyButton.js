import { colors } from "@/styles/variables/variables";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import SvgSelector from "./SvgSelector";

const Box = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  & button {
    width: 38px;
    height: 38px;
    border-radius: 50px;
    transition: background-color 0.2s;
    & path {
      transition: fill 0.2s;
    }
    &:hover {
      background-color: ${colors.cyan};
      & path {
        fill: ${colors.white};
      }
    }
    &:active {
      background-color: rgba(111, 214, 224, 0.6);
    }
  }
`;

export const CopyButton = ({ children }) => {
  return (
    <Box>
      <span>{children}</span>
      <CopyToClipboard text={children}>
        <button>
          <SvgSelector svg={"copy"} />
        </button>
      </CopyToClipboard>
    </Box>
  );
};
