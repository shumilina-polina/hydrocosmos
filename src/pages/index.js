import Articles from "@/components/Index/Articles/Articles";
import Form from "@/components/Index/Form/Form";
import Journal from "@/components/Index/Journal/Journal";
import Main from "@/components/Index/Main/Main";
import Manifest from "@/components/Index/Manifest/Manifest";
import News from "@/components/Index/News/News";
import Pairs from "@/components/Index/Pairs/Pairs";
import Reports from "@/components/Index/Reports/Reports";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section>
        <Main />
        <Journal />
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
