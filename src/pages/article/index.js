import Article from "@/components/article/Article";
import BestArticle from "@/components/article/BestArticle";

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ARL_URL}/articles`);
    const articles = await res.json();

    if (!res.ok) {
      throw new Error(`응답 에러! Status: ${res.status}`);
    }

    return {
      props: { articles },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      props: { articles: [] },
    };
  }
}

export default function Freeboard({ articles }) {
  return (
    <div className="flex flex-col w-full gap-[24px] px-[16px] md:px-[24px] xl:px-[360px] pt-[82px] pb-[251px] md:pb-[170px] xl:pb-[453px]">
      <section>
        <BestArticle articles={articles} />
      </section>
      <section>
        <Article articles={articles} />
      </section>
    </div>
  );
}
