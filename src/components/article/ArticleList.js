import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../public/Img/user-icon/ic_profile.png";
import likeIcon from "../../../public/Img/button-image/Like_Icon.png";
import baseImage from "../../../public/Img/base-image/baseArticleImg.png";
import { formatDay } from "@/hooks/day";

export default function ArticleList({ article = [] }) {
  return (
    <>
      {article.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.id}`}
          className="flex flex-col w-full gap-[24px] bg-custom-color-list-gray border-b border-custom-color-border-gray pb-[24px]"
        >
          <section className="flex justify-between">
            <p className="text-xl font-semibold">{article.title}</p>
            <Image src={baseImage} className="w-[72px]" />
          </section>
          <section className="flex justify-between">
            <div className="flex gap-[8px]">
              <Image src={userIcon} className="w-[24px] object-contain" />
              <p className="text-sm text-custom-text-gray-400 font-normal">
                총명한 판다
              </p>
              <p className="text-sm text-custom-text-gray-50 font-normal">
                {formatDay(article.createdAt)}
              </p>
            </div>
            <div className="flex gap-[8px]">
              <Image src={likeIcon} className="w-[20px] object-contain" />
              <p className="text-base font-normal text-custom-text-gray-200">
                {article.likes?.length || 0}+
              </p>
            </div>
          </section>
        </Link>
      ))}
    </>
  );
}
