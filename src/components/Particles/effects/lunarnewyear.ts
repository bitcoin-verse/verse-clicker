import { ISourceOptions } from "@tsparticles/engine";

import lanturn from "../../../assets/lanturn.png";

export const lunarNewYear: ISourceOptions = {
  name: "React Multiple Images",
  particles: {
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
    },

    number: {
      density: {
        enable: true,
      },
      value: 30,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.1,
        sync: false,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
    },

    tilt: {
      direction: "clockwise",
      enable: true,
      value: { min: 0, max: 45 },
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    wobble: {
      distance: {
        min: 0,
        max: 50,
      },
      enable: true,
      speed: {
        angle: { min: 0, max: 10 },
        move: { min: 0.5, max: 1 },
      },
    },
    shape: {
      options: {
        image: [
          {
            height: 486,
            width: 393,
            replaceColor: true,
            src: lanturn,

            fill: true,
            close: true,
          },
        ],
      },
      type: "image",
    },
    size: {
      animation: {
        enable: true,
        speed: 4,
        sync: false,
      },
      value: {
        min: 10,
        max: 30,
      },
    },
  },
  pauseOnBlur: true,
};
