import Articles from "@/components/Index/Articles/Articles";
import Form from "@/components/Index/Form/Form";
import Journal from "@/components/Index/Journal/Journal";
import Main from "@/components/Index/Main/Main";
import Manifest from "@/components/Index/Manifest/Manifest";
import News from "@/components/Index/News/News";
import Pairs from "@/components/Index/Pairs/Pairs";
import Reports from "@/components/Index/Reports/Reports";
import { GET_MAIN_PAGE } from "@/services/gqlService";
import Error from "@/shared/UI/Error";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {
    i18n: { language },
  } = useTranslation();

  const { data, error } = useQuery(GET_MAIN_PAGE, {
    variables: { lang: language },
  });

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <Main
            data={data?.slider.data?.attributes.slider.data}
            journal={data?.journals.data[0]?.attributes}
          />
          <Journal data={data?.journals.data} />
          <News data={data?.news.data} />
          <Articles data={data?.articles.data} />
          <Manifest />
          <Reports data={data?.reports.data} />
          <Pairs data={data?.pair.data?.attributes.logos.data} />
        </>
      )}
      {/* <Form /> */}
    </>
  );
}
