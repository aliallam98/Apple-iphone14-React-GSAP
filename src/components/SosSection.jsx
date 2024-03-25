import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SosSection = () => {
  const timeline = gsap.timeline();
  useGSAP(() => {
    timeline.to("#wrapperCircles", {
      scrollTrigger: {
        trigger: "#sosSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 40%",
        end: "+=80%",
        // markers: true,
        scrub: true,
      },
      x: 80,
      y: -100,
      scale: 1.25,
      opacity: 0.8,
      skewY: -10,
    });
    timeline.to("#sosText", {
      scrollTrigger: {
        trigger: "#sosSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 20%",
        end: "+=80%",
        // markers: true,
        scrub: true,
      },
      skewY: 15,
      scale: 2,
    });
  }, []);
  return (
    <section
      className="h-[150vh] flex flex-col justify-center items-center"
      id="sosSection"
    >
      <div
        className="container flex flex-col justify-center items-center gap-20"
        id="wrapperCircles"
      >
        <div className="flex flex-col justify-center items-center w-[500px] h-[500px] rounded-full border-red-100 border-4 p-5">
          <div className="flex flex-col justify-center items-center w-[400px] h-[400px] rounded-full border-red-200 border-4 p-5">
            <div className="flex flex-col justify-center items-center w-[300px] h-[300px] rounded-full border-red-300 border-4 p-5">
              <div className="flex flex-col justify-center items-center w-[200px] h-[200px] rounded-full border-red-400 border-4 p-5">
                <img src="sos.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <p
          className="max-w-[600px] mx-auto text-7xl font-semibold text-textColor
        "
          id="sosText"
        >
          Emergency SOS via satellite.
        </p>
      </div>
    </section>
  );
};

export default SosSection;
