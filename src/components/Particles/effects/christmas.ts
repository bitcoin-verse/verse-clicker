import type { IOptions, RecursivePartial } from "tsparticles-engine";

import sf1 from "../../../assets/snowflakes/snowflake-1.png";
import sf2 from "../../../assets/snowflakes/snowflake-2.png";
import sf3 from "../../../assets/snowflakes/snowflake-3.png";
import sf4 from "../../../assets/snowflakes/snowflake-4.png";
import sf5 from "../../../assets/snowflakes/snowflake-5.png";
import sf6 from "../../../assets/snowflakes/snowflake-6.png";
import santa from "../../../assets/santa.png";

export const snow: RecursivePartial<IOptions> = {
  background: {
    color: "transparent",
  },
  particles: {
    shape: {
      type: "images",
      options: {
        images: [
          {
            src: sf1,
            name: "sf1",
          },
          {
            src: sf2,
            name: "sf2",
          },
          {
            src: sf3,
            name: "sf3",
          },
          {
            src: sf4,
            name: "sf4",
          },
          {
            src: sf5,
            name: "sf5",
          },
          {
            src: sf6,
            name: "sf6",
          },
        ],
      },
    },
    number: {
      value: 100,
      density: {
        enable: true,
      },
    },
    move: { direction: "bottom", enable: !0, random: !1, straight: !1 },
    opacity: { value: { min: 0.4, max: 0.8 } },
    size: { value: { min: 1, max: 10 } },
    rotate: {
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
      direction: "random",
      value: {
        min: 0,
        max: 360,
      },
    },
    wobble: { distance: 20, enable: !0, speed: { min: -5, max: 5 } },
  },
  emitters: {
    position: {
      y: 80,
      x: -10,
    },
    life: {
      wait: true,
    },
    rate: {
      delay: 45,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
    particles: {
      shape: {
        type: "images",
        options: {
          images: [
            {
              src: santa,
              width: 596,
              height: 200,
            },
          ],
        },
      },
      size: {
        value: 100,
      },
      move: {
        speed: 10,
        random: false,
        straight: true,
        direction: -20,
        outModes: {
          default: "none",
          right: "destroy",
        },
      },
      wobble: { distance: 0, enable: false },
      rotate: {
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: "random",
        value: {
          min: -10,
          max: -10,
        },
      },
      opacity: { value: { min: 0.5, max: 0.5 } },
      zIndex: {
        value: 0,
      },
    },
  },
  detectRetina: true,
};
