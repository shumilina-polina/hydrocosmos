import Wrapper from "@/shared/UI/Wrapper/Wrapper";
import s from "@/styles/pages/404.module.scss";

export default function Error() {
  return (
    <Wrapper>
      <div className={s.wrapper}>
        <h2>404</h2>
        <span>Страница не найдена</span>
      </div>
    </Wrapper>
  );
}
