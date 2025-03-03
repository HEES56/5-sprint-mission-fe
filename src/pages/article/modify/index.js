import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Modify() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ARL_URL}/articles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          image: [],
        }),
      });

      if (!res.ok) throw new Error("게시글 등록 실패");

      const data = await res.json();

      router.push(`/article/${data.id}`);
    } catch (error) {
      console.error(error);
      alert("게시글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[24px] px-[16px] md:px-[24px] xl:px-[360px] pt-[82px] pb-[251px] md:pb-[170px] xl:pb-[453px]"
    >
      <section className="flex justify-between">
        <p className="text-xl font-bold text-custom-text-black-800">
          게시글 쓰기
        </p>
        <button
          type="submit"
          className="px-6 py-2 text-nowrap bg-custom-color-blue text-base text-white font-semibold rounded-lg "
        >
          등록
        </button>
      </section>
      <section>
        <p className="text-lg font-bold text-custom-text-black-800">*제목</p>

        <input
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-[24px] py-[16px] bg-custom-input-gray-100 rounded-xl focus:outline-none"
        />
      </section>
      <section>
        <p className="text-lg font-bold text-custom-text-black-800">*내용</p>
        <textarea
          name="content"
          placeholder="내용을 입력해주세요"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[200px] md:h-[242px] px-[24px] py-[16px] bg-custom-input-gray-100 rounded-xl focus:outline-none resize-none"
        />
      </section>
    </form>
  );
}
