import Image from "next/image";
import LogoImg from "../../../public/Img/logo-image/mainLogo.png";
import LogoText from "../../../public/Img/logo-image/mainText.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed flex justify-between items-center w-full py-[16px]  px-[14px] md:px-[24px] xl:px-[200px] bg-white border-b border-gray-300 z-10">
      <section className="flex mr-[23px] gap-[6px] md:gap-[20px] xl:gap-[32px] ">
        <div className="flex  gap-3">
          <Image
            src={LogoImg}
            alt="market logo"
            className="w-[40px] hidden md:block"
          />
          <Image
            src={LogoText}
            alt="market text logo"
            className="w-[81px] md:w-[103px] object-contain"
          />
        </div>

        <div className="flex text-lg gap-5  items-center">
          <Link
            href={"/article"}
            className="text-custom-color-blue text-lg font-bold text-nowrap"
          >
            자유게시판
          </Link>
          <button className="text-gray-600 text-lg font-bold text-nowrap">
            중고마켓
          </button>
        </div>
      </section>

      <section className="px-6 py-2 text-nowrap bg-custom-color-blue text-base text-white font-semibold rounded-lg ">
        로그인
      </section>
    </div>
  );
}
