import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function GsapTo() {
  useGSAP(() => {
    gsap.to("#box", {
      x: 300,
      rotation: 360,
      duration: 4,
      ease: "elastic",
    });
  }, []);
  return (
    <div className="w-screen h-dvh">
      <div
        id="box"
        className="absolute top-20 left-20 w-20 h-20 bg-blue-500 rounded-3xl"
      ></div>
    </div>
  );
}

export default GsapTo;
