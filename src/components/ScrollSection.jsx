// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

// const ScrollSection = () => {
//   useGSAP(() => {
//     gsap.from("#middleImage", {
//       scrollTrigger: {
//         trigger: "#targetSection",
//         toggleActions: "restart reverse restart reverse ",
//         start: "top 50%",
//         end: "+=50%",
//         // markers: true,
//         scrub: true,
//       },
//       y: 200,
//       scale: 0,
//       // onComplete: () => {
//       //   gsap.from("#secondImage", {
//       //     scrollTrigger: {
//       //       trigger: "#targetSection",
//       //       toggleActions: "restart reverse restart reverse ",
//       //       start: "top 50%",
//       //       end: "+=50%",
//       //       // markers: true,
//       //       scrub: true,
//       //     },
//       //     y: 1400,
//       //   });
//       // },
//     });
//   });
//   return (
//     <section className="h-[200vh] bg-sky-300 ">
//       <div
//         className="sticky top-0 flex h-screen  overflow-hidden pt-60"
//         id="targetSection"
//       >
//         <img
//           src="/63aeae2f7013f83ed988c6b9_1.png"
//           alt=""
//           width={400}
//           height={390}
//           className="object-contain translate-y-20 translate-x-32 h-fit"
//           id="firstImage"
//         />
//         <img
//           src="/63aeae30eb85a1798ddb28d3_2.png"
//           alt=""
//           width={320}
//           height={412}
//           className="object-contain -translate-y-20 h-fit"
//           id="secondImage"
//         />
//         <img
//           src="/63aeae2f3ba6d1f43406aabe_3.png"
//           alt=""
//           width={270}
//           height={370}
//           className="object-contain -translate-y-32 h-fit"
//           id="middleImage"
//         />
//         <img
//           src="/63aeae30d94154e67191d05f_4.png"
//           alt=""
//           width={320}
//           height={412}
//           className="object-contain -translate-y-20 h-fit"
//         />
//         <img
//           src="/63aeae30cee58c754c14a8c1_5.png"
//           alt=""
//           width={400}
//           height={390}
//           className="object-contain translate-y-20 -translate-x-32 h-fit"
//         />
//       </div>
//     </section>
//   );
// };

// export default ScrollSection;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const timeline = gsap.timeline();

  useGSAP(() => {
    gsap.from("#Wonderfull", {
      scrollTrigger: {
        trigger: "#headingSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 20%",
        end: "+=250%",
        scrub: true,
        // markers: true,
      },
      // opacity: 0,
      scale: 3,
      rotateX: 90,
      rotateY: 10,
    });
    timeline.from("#middleImage", {
      scrollTrigger: {
        trigger: "#targetSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 40%",
        end: "+=40%",
        scrub: true,
        // markers: true,
      },
      y: 400,
      scale: 0,
    });
    timeline.from("#secondImage", {
      scrollTrigger: {
        trigger: "#targetSection",
        toggleActions: "restart reverse restart reverse",
        start: "top 20%",
        end: "+=40%",
        scrub: true,
        // markers: true,
      },
      y: 400,
      scale: 0,
    });
    timeline.from("#fourthImage", {
      scrollTrigger: {
        trigger: "#targetSection",
        toggleActions: "restart reverse restart reverse",
        start: "center 50%",
        end: "+=40%",
        scrub: true,
        // markers: true,
      },
      y: 400,
      scale: 0,
    });
    timeline.from("#firstImage", {
      scrollTrigger: {
        trigger: "#targetSection",
        toggleActions: "restart reverse restart reverse",
        start: "center 40%",
        end: "+=80%",
        scrub: true,
        // markers: true,
      },
      y: 400,
      scale: 0,
    });
    timeline.from("#fifthImage", {
      scrollTrigger: {
        trigger: "#targetSection",
        toggleActions: "restart reverse restart reverse",
        start: "bottom 60%",
        end: "+=100%",
        scrub: true,
        // markers: true,
      },
      y: 400,
      scale: 0,
    });
  });

  return (
    <section className="relative h-[400vh]">
      <div className=" sticky -top-20  h-screen pt-40" id="headingSection">
        <h1
          id="Wonderfull"
          className="text-center text-[120px] text-black font-semibold "
        >
          Wonderfull.
        </h1>
      </div>

      <div
        className="sticky top-40 flex h-screen  overflow-hidden pt-60 "
        id="targetSection"
      >
        <img
          src="/63aeae2f7013f83ed988c6b9_1.png"
          alt=""
          width={400}
          height={390}
          className="object-contain translate-y-20 translate-x-32 h-fit"
          id="firstImage"
        />
        <img
          src="/63aeae30eb85a1798ddb28d3_2.png"
          alt=""
          width={320}
          height={412}
          className="object-contain -translate-y-20 h-fit"
          id="secondImage"
        />
        <img
          src="/63aeae2f3ba6d1f43406aabe_3.png"
          alt=""
          width={270}
          height={370}
          className="object-contain -translate-y-32 h-fit"
          id="middleImage"
        />
        <img
          src="/63aeae30d94154e67191d05f_4.png"
          alt=""
          width={320}
          height={412}
          className="object-contain -translate-y-20 h-fit"
          id="fourthImage"
        />
        <img
          src="/63aeae30cee58c754c14a8c1_5.png"
          alt=""
          width={400}
          height={390}
          className="object-contain translate-y-20 -translate-x-32 h-fit"
          id="fifthImage"
        />
      </div>
    </section>
  );
};

export default ScrollSection;
