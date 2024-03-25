import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondSection = () => {
  //Text Animation
  useGSAP(() => {
    gsap.to(".smallText", {
      scrollTrigger: {
        trigger: "#secondSection",
        markers: true,
        start: "top 60%",
        end: "+=40%",
        scrub: true,
      },
      y: -150,
      scale: 1.15,
    });
  });
  //Images
  useGSAP(() => {
    gsap.to("#leftImage", {
      scrollTrigger: {
        trigger: "#secondSection",
        markers: true,
        start: "center 85%",
        end: "+=100%",
        scrub: true,
      },
      x: 1000,
    });
    gsap.to("#rightImage", {
      scrollTrigger: {
        trigger: "#secondSection",
        markers: true,
        start: "center 85%",
        end: "+=100%",
        scrub: true,
      },
      x: -1000,
    });
  });

  //Battery
  useGSAP(() => {
    gsap.to("#batteryDiv", {
      scrollTrigger: {
        trigger: "#secondSection",
        markers: true,
        start: "center 85%",
        end: "+=100%",
        scrub: true,
      },
      opacity: 1,
      scale: 1.4,
      skewY: -15,
      rotate: -20,
      onComplete: () => {
        gsap.to("#batteryDiv", {
          rotate: 0,
          skewY: 0,
          duration: 1,
        });
      },
    });
    gsap.to("#chargingBattery", {
      scrollTrigger: {
        trigger: "#secondSection",
        markers: true,
        start: "center 85%",
        end: "+=100%",
        scrub: true,
      },
      x: 0,
    });
  });
  return (
    <section
      className="relative h-[200vh] bg-slate-200 flex flex-col"
      id="secondSection"
    >
      <div className="sticky top-0 flex justify-center pt-20 bg-black/10 overflow-hidden h-screen">
        <div className="relative">
          <p className="text-textColor absolute right-40 top-40  text-center text-7xl -rotate-12 skew-x-12 -z-10 smallText">
            Big
          </p>
          <img
            src="63b67d039782bb8c46fa7127_63abe78ab595441f60825971_iphone-14-removebg.png"
            alt=""
            className="w-[1500px] h-[1500px] object-contain"
            id="rightImage"
          />
        </div>
        <div className="relative">
          <p className="text-textColor absolute left-0 top-32  text-center text-7xl rotate-[20deg] skew-x-12 scale-75  -z-10 smallText">
            and bigger
          </p>
          <img
            src="63b67eaabb4b019e5f06f64b_2-removebg-p-1600.png"
            alt=""
            className="w-[1500px] h-[1500px] object-contain"
            id="leftImage"
          />
        </div>

        {/* battery */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  
          flex flex-col gap-8 justify-center items-center opacity-0 scale-0"
          id="batteryDiv"
        >
          <div className="relative overflow-hidden">
            <img
              src="batteryFr.png"
              alt=""
              className="w-[150px] h-[70px] absolute"
            />
            <img
              src="greenbattery_123.png"
              alt=""
              className="w-[150px] h-[70px] -translate-x-32"
              id="chargingBattery"
            />
          </div>
          <p className="text-textColor text-7xl max-w-[400px]">
            Our longest battery life ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
