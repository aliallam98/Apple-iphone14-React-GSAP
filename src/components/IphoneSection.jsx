import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IphoneSection = () => {
  useGSAP(() => {
    gsap.to("#mainHeading", {
      scrollTrigger: {
        trigger: "#mainHeading",
        start: "top 10%",
        end: "+=70%",
        // markers: true,
        scrub: true,
      },
      opacity: 0,
    });
  }, []);
  return (
    <section className="h-screen py-20 flex justify-center items-center bg-white">
      <h1
        className="text-[200px] text-center font-semibold  
      bg-gradient-to-r from-sky-500 via-green-500 to-indigo-400 
      text-transparent bg-clip-text"
        id="mainHeading"
      >
        iPhone 14
      </h1>
    </section>
  );
};

export default IphoneSection;
