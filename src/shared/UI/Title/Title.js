import s from "./title.module.scss";

const Title = ({ children }) => {
  return <h2 className={s.title}>{children}</h2>;
};

export default Title;
