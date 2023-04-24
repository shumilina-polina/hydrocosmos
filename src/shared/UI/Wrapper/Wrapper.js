import s from "./wrapper.module.scss";

const Wrapper = ({children}) => {
  return <div className={s.container}>{children}</div>
};

export default Wrapper;
