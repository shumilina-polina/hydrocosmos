import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import styled from "styled-components";
import "moment/locale/ru";
import moment from "moment/moment";

const Date = ({ format = "MM YYYY", children }) => {
  return (
    <Box>
      {moment(children)
        .locale("ru")
        // .locale("en")
        .format(format)}
    </Box>
  );
};

export default Date;

const Box = styled.div`
  ${fonts.inter4}
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.03em;
  opacity: 0.8;
  color: ${colors.black};
  &:first-letter {
    text-transform: uppercase;
  }
`;
