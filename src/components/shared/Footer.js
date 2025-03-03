import InstaIcon from "../../../public/Img/site-icon/Insta.png";
import FaceBIcon from "../../../public/Img/site-icon/facebook.png";
import TwitterIcon from "../../../public/Img/site-icon/Twitter.png";
import YoutubeIcon from "../../../public/Img/site-icon/Youtube.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 flex justify-center px-20 pt-8 pb-28">
      <div className="flex justify-between items-center w-[1520px] h-[20px]">
        <section>
          <h1>©codeit - 2024</h1>
        </section>

        <section className="flex gap-12">
          <h1>Privacy Policy</h1>
          <h1>FAQ</h1>
        </section>

        <section className="flex gap-2">
          <Image
            className="w-5 object-contain "
            src={FaceBIcon}
            alt="facebook"
          />
          <Image
            className="w-5 object-contain"
            src={TwitterIcon}
            alt="twitter"
          />
          <Image
            className="w-5 object-contain"
            src={YoutubeIcon}
            alt="Youtube"
          />
          <Image className="w-5 object-contain" src={InstaIcon} alt="instar" />
        </section>
      </div>
    </footer>
  );
}
