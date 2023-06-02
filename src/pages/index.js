import Articles from "@/components/Index/Articles/Articles";
import Form from "@/components/Index/Form/Form";
import Journal from "@/components/Index/Journal/Journal";
import Main from "@/components/Index/Main/Main";
import Manifest from "@/components/Index/Manifest/Manifest";
import News from "@/components/Index/News/News";
import Pairs from "@/components/Index/Pairs/Pairs";
import Reports from "@/components/Index/Reports/Reports";
import { GET_MAIN_PAGE } from "@/services/gqlService";
import Wrapper from "@/shared/UI/Wrapper";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { data, loading, error } = useQuery(GET_MAIN_PAGE);
  console.log("data: ", data);

  return (
    <>
      {loading ? (
        <Wrapper>
          <p>Загрузка...</p>
        </Wrapper>
      ) : error ? (
        <Wrapper>
          <p>Ошибка, перезагрузите страницу</p>
        </Wrapper>
      ) : (
        data && (
          <section>
            <Main />
            <Journal data={data.journals.data} />
            <News />
            <Articles />
            <Manifest />
            <Reports />
            <Pairs />
            <Form />
          </section>
        )
      )}
    </>
  );
}
