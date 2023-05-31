import Articles from "@/components/Index/Articles/Articles";
import Form from "@/components/Index/Form/Form";
import Magazine from "@/components/Index/Magazine/Magazine";
import Main from "@/components/Index/Main/Main";
import Manifest from "@/components/Index/Manifest/Manifest";
import News from "@/components/Index/News/News";
import Pairs from "@/components/Index/Pairs/Pairs";
import Reports from "@/components/Index/Reports/Reports";

import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <section>
        <Main />
        <Magazine />
        <News />
        <Articles />
        <Manifest />
        <Reports />
        <Pairs />
        <Form />
      </section>
    </>
  );
}
