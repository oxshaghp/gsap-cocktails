import React from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  // GSAP ANIMATION FOR NAVBAR BACKDROP
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top -10",
          end: "+=1",
        },
      })
      .fromTo(
        "nav",
        {
          backgroundColor: "#00000000",
          backdropFilter: "blur(0px)",
        },
        {
          backgroundColor: "#00000080",
          backdropFilter: "blur(10px)",
          duration: 1,
          ease: "power1.inOut",
        }
      );
  });

  return (
    <div>
      <nav>
        <div>
          <a className="flex items-center gap-2">
            <img src="/images/logo.png" />
            <p>Valvet pour</p>
          </a>
          <ul>
            {navLinks.map((links) => (
              <li key={links.id}>
                <a href={`#${links.id}`}>{links.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
