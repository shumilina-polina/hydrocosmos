import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import Link from "next/link";
import s from "./header.module.scss";
import SvgSelector from "@/shared/UI/SvgSelector";

const Header = () => {
  return (
    <header className={s.header}>
      <Wrapper>
        <div className={s.header_wrapper}>
          <Link href={"/"} className={s.logo}>
            <SvgSelector svg="logo" />
          </Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
