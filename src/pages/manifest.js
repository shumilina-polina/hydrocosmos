import { useTranslation } from "react-i18next";
import Manifest from "@/components/Index/Manifest/Manifest";
import styled from "styled-components";
import { breakpoints, colors } from "@/styles/variables/variables";
import Head from "next/head";
import BreadCrumbs from "@/shared/UI/BreadCrumbs";
import Link from "next/link";
import Wrapper from "@/shared/UI/Wrapper";

export default function ManifestPage() {
  const { t } = useTranslation();
  return (
    <Box>
      <Head>
        <title>Гидрокосмос - {t("pages.manifest")}</title>
      </Head>
      <Wrapper>
        <BreadCrumbs>
          <Link href={"/"}>{t("pages.main")}</Link>
          <span>{t("pages.manifest")}</span>
        </BreadCrumbs>
        <Manifest />
      </Wrapper>
    </Box>
  );
}

const Box = styled.div`
  padding: 80px 0 250px;
  @media ${breakpoints.tablet} {
    padding: 50px 0;
  }
  & section {
    padding: 44px 0 0;
    color: ${colors.black};
    background-color: ${colors.white};
    & h2 {
      padding: 0;
    }
    & footer {
      @media ${breakpoints.laptop} {
        max-width: 80%;
      }
      & > p {
        &:nth-child(2),
        &:nth-child(3) {
          display: block;
        }
      }
      & > a {
        display: none;
      }
    }
  }
`;
