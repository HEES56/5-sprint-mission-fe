import "@/styles/globals.css";
import localFont from "next/font/local";
import Header from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={pretendard.variable}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
