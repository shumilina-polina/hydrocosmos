import { breakpoints, colors, fonts } from "@/styles/variables/variables";
import Link from "next/link";
import styled from "styled-components";

const Author = styled.span`
  ${fonts.inter4};
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.03em;
  transition: color 0.3s;
  color: ${colors.black};
  &:hover {
    color: ${colors.cyanArticle};
  }
  @media ${breakpoints.tablet} {
    line-height: 22px;
  }
`;

const Authors = ({ data }) => {
  return (
    <>
      {data.map((author, i, arr) => (
        <Author key={author.id}>
          <Link href={"/"}>
            {author.name}
            {i < arr.length - 1 ? ", " : "."}
          </Link>
        </Author>
      ))}
    </>
  );
};

export default Authors;
