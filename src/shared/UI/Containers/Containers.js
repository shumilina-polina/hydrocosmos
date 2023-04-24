import s from "./containers.module.scss";

export const DesktopContainer = (props) => {
  return <div className={s.desktop}>{props.children}</div>;
};
export const MobileContainer = (props) => {
  return <div className={s.mobile}>{props.children}</div>;
};
