import logoImage from "../../assets/images/logo.png";
import titleOnly from "../../assets/images/titleonly.png";
import profileImage from "../../assets/images/icon.png";
import { useWindowWidth } from "../../shared/hooks/useWindowWidth";

export default function Header() {
    const windowWidth = useWindowWidth();

    const renderLogo = () => {
        if (windowWidth === "mobile") return <img src={titleOnly} />;
        return <img src={logoImage} />;
    };

    const renderProfile = () => {
        if (windowWidth === "desktop") {
            return (
                <button className="px-[23px] py-[8px] bg-[#3692FF] rounded-lg text-white font-bold">
                    로그인
                </button>
            );
        }
        return <img src={profileImage} alt="프로필" />;
    };

    return (
        <div className="flex items-center justify-between w-full border-b fixed top-0 bg-white h-[70px] px-[16px] md:px-[24px] xl:px-[200px] z-10">
            <div className="flex items-center text-[#4B5563] font-bold text-[16px] md:text-[18px] gap-[8px] md:gap-[20px] xl:gap-[24px]">
                {renderLogo()}
                <div className="flex gap-[8px] md:gap-[30px]">
                    <a href="#">자유게시판</a>
                    <a href="#">중고마켓</a>
                </div>
            </div>
            {renderProfile()}
        </div>
    );
}
