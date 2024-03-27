import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EpicSection = () => {
  useGSAP(() => {
    gsap.from("#epicText", {
      scrollTrigger: {
        trigger: "#epicSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 10%",
        end: "+=40%",
        // markers: true,
        scrub: true,
      },
      opacity: 0.5,
      scale: 0.7,
    });
    gsap.from("#epicImage", {
      scrollTrigger: {
        trigger: "#epicSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 10%",
        end: "+=50%",
        // markers: true,
        scrub: true,
      },
      rotate: 45,
      x: 1200,
    });
  }, []);
  return (
    <section
      id="epicSection"
      className="relative h-[200vh] py-40 flex flex-col justify-center items-center"
    >
      <h1
        id="epicText"
        className="text-9xl font-semibold text-black max-w-6xl text-center"
      >
        Epic Pro‑level photos and videos.
      </h1>
      <img
        id="epicImage"
        src="epic.jpeg"
        alt=""
        className="w-[1000px] scale-[150%] origin-left mt-40 transform"
      />
    </section>
  );
};

export default EpicSection;
