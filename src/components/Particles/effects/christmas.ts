import type { IOptions, RecursivePartial } from "tsparticles-engine";

import sf1 from "../../../assets/snowflakes/snowflake-1.png";
import sf2 from "../../../assets/snowflakes/snowflake-2.png";
import sf3 from "../../../assets/snowflakes/snowflake-3.png";
import sf4 from "../../../assets/snowflakes/snowflake-4.png";
import sf5 from "../../../assets/snowflakes/snowflake-5.png";
import sf6 from "../../../assets/snowflakes/snowflake-6.png";

export const snow: RecursivePartial<IOptions> = {
  particles: {
    shape: {
      type: "image",
      options: {
        image: [
          {
            name: "sf1",
          },
          {
            name: "sf2",
          },
          {
            name: "sf3",
          },
          {
            name: "sf4",
          },
          {
            name: "sf5",
          },
          {
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
  preload: [
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
};
