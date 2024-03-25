import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useState } from "react";

const DisplayPartsAndColorsSection = () => {
  const [selectedColor, setSelectedColor] = useState("blue"); // Initial color

  useGSAP(() => {
    gsap.from("#selectedColorText", {
      opacity: 0,
      duration: 0.75,
      scale: 1.15,
      y: -10,
      x: -10,
    });
    gsap.from("#sideImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
    gsap.from("#durableImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
    gsap.from("#lockScreenImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
    gsap.from("#cameraImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
    gsap.from("#waterResistanceImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
    gsap.from("#glassImage", {
      x: -200,
      opacity: 0,
      duration: 0.75,
    });
  }, [selectedColor]);

  const side = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668886961/codepens/display_blue_vhiobo.jpg",
    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966381/codepens/display_purple_e05dzw.jpg",
    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966409/codepens/display_midnight_hovnnf.jpg",
    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966430/codepens/display_starlight_xzxxtu.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668966454/codepens/display_red_xqwm4l.jpg",
  };

  const durable = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668889161/codepens/durable_blue_hy3pcn.jpg",
    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_purple_ij65ye.jpg",
    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_midnight_v5uzd9.jpg",
    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_starlight_m8q9bi.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669235665/codepens/durable_red_yz76ei.jpg",
  };

  const lockScreen = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668889971/codepens/lockscreen_blue_kvcokh.jpg",
    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_purple_qymskd.jpg",
    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_midnight_qpbexo.jpg",
    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_starlight_edvfn8.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668974864/codepens/lockscreen_red_lfxayk.jpg",
  }; // Updated URL

  const camera = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890102/codepens/camera_blue_xqrris.jpg",
    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_purple_aadquj.jpg",
    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_midnight_lgolgu.jpg",
    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975350/codepens/camera_starlight_elbxob.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668975466/codepens/camera_red_fa5zii.jpg",
  };

  const waterResistance = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890701/codepens/waterResistance_blue_o0wz3l.jpg",
    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_purple_mx0eqp.jpg",
    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_midnight_hn2cjq.jpg",
    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_starlight_dabsxk.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232752/codepens/waterResistance_red_2_atkxgm.jpg",
  };

  const glass = {
    blue: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1668890785/codepens/glass_blue_yhsdb6.jpg",

    purple:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_purple_dueykc.jpg",

    midnight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_midnight_psxtio.jpg",

    starlight:
      "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_starlight_zlxyjd.jpg",
    red: "https://res.cloudinary.com/dcelvzyfc/image/upload/v1669232689/codepens/glass_red_xlnoxh.jpg",
  };

  return (
    <>
      <section className=" bg-white py-40">
        <div className="container max-w-[1020px] mx-auto grid grid-cols-1 lg:grid-cols-3 grid-rows-1 lg:grid-rows-3 gap-4  h-[1100px]">
          <div className="col-span-1 row-span-1 lg:row-span-2 flex flex-col p-5 bg-bgColor overflow-hidden">
            <img src={side[selectedColor]} alt="" id="sideImage" />
            <p className="text-textColor text-xl text-center">
              Vibrant Super Retina XDR display
            </p>
          </div>
          <div className="col-span-1 row-span-1  bg-bgColor p-5 flex items-center overflow-hidden">
            <img
              src={durable[selectedColor]}
              alt=""
              className="h-full"
              id="durableImage"
            />
            <div className="ml-4">
              <h2 className="font-semibold text-3xl text-black">
                Beautifully durable
              </h2>
              <p className="text-textColor text-xl">aerospace-grade aluminum</p>
            </div>
          </div>
          <div className="col-span-1 row-span-1  bg-bgColor p-5 overflow-hidden">
            <img src={lockScreen[selectedColor]} alt="" id="lockScreenImage" />
          </div>
          <div className="col-span-1 row-span-1  bg-[#f5f5f7] flex flex-col justify-center items-center overflow-hidden">
            <p className="text-textColor text-2xl">Five fantastic colors</p>
            <p
              className="capitalize font-semibold text-5xl text-black my-4"
              id="selectedColorText"
            >
              {selectedColor}
            </p>
            <div className="space-x-1">
              <button
                className="w-10 h-10 rounded-full bg-[#c0cfde]"
                onClick={() => setSelectedColor("blue")}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#e6d6e8]"
                onClick={() => setSelectedColor("purple")}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#585b5f]"
                onClick={() => setSelectedColor("midnight")}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#f0ece8]"
                onClick={() => setSelectedColor("starlight")}
              />
              <button
                className="w-10 h-10 rounded-full bg-[#e11c2a]"
                onClick={() => setSelectedColor("red")}
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1  bg-bgColor p-5 overflow-hidden">
            <img
              src={camera[selectedColor]}
              alt=""
              className="scale-[200%] origin-top-left"
              id="cameraImage"
            />
          </div>
          <div className="col-span-1 row-span-1  bg-bgColor p-5 flex flex-col justify-center items-center overflow-hidden">
            <img
              src={waterResistance[selectedColor]}
              alt=""
              id="waterResistanceImage"
            />
            <p className="text-textColor text-2xl">with water resistance</p>
          </div>
          <div className="col-span-1 lg:col-span-2 row-span-1  bg-bgColor p-5 flex flex-col gap-4 justify-center items-center overflow-hidden">
            <div className="mb-4 flex gap-4 items-center px-10">
              <h2 className="font-semibold text-4xl text-black text-nowrap ">
                Ceramic Shield
              </h2>
              <p className="text-textColor text-2xl text-pretty">
                is tougher than any amartphone glass
              </p>
            </div>
            <img src={glass[selectedColor]} alt="" id="glassImage" />
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayPartsAndColorsSection;
