import Image from "next/image";
import searchIcon from "../../../public/Img/input-icon/ic_search.png";
import ArticleList from "./ArticleList";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Dropdown } from "./ArticleCustomSelect";

export default function Article({ articles }) {
  const [articleList, setArticleList] = useState(articles);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("recent");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "recent") {
      filteredArticles = filteredArticles.sort(
        (a, b) => b.createdAt - a.createdAt
      );
    } else if (sortOrder === "likes") {
      filteredArticles = filteredArticles.sort((a, b) => b.likes - a.likes);
    }

    setArticleList(filteredArticles);
  }, [articles, search, sortOrder]);

  return (
    <>
      <div className="flex flex-col w-full gap-[24px]">
        <section className="flex  justify-between">
          <p className="text-xl text-custom-text-black-800 font-bold">게시글</p>
          <Link
            href={"/article/modify"}
            className="px-6 py-2 text-nowrap bg-custom-color-blue text-base text-white font-semibold rounded-lg "
          >
            글쓰기
          </Link>
        </section>

        <section className="relative flex gap-[13px] md:gap-[6px] xl:gap-[16px]">
          {/*input*/}
          <input
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={handleSearch}
            className="w-full pl-[40px] py-[9px] bg-custom-input-gray-100 rounded-xl focus:outline-none"
          />
          <Image
            src={searchIcon}
            alt="검색 아이콘"
            className="absolute w-[24px] left-[16px] top-1/2 transform -translate-y-1/2"
          />
          <Dropdown sortOrder={sortOrder} setSortOrder={handleSortChange} />
        </section>

        <section className="flex flex-col md:gap-[16px] xl:gap-[24px]">
          <ArticleList article={articleList} />
        </section>
      </div>
    </>
  );
}
