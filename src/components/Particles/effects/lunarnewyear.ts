import { ISourceOptions } from "@tsparticles/engine";

import lanturn from "../../../assets/lanturn.png";

export const lunarNewYear: ISourceOptions = {
  name: "React Multiple Images",
  particles: {
    color: {
      value: "#CCC",
    },
    collisions: {
      enable: true,
    },
    links: {
      blink: false,
      color: "#fff",
      consent: false,
      distance: 150,
      enable: false,
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
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
    shape: {
      options: {
        image: [
          {
            height: 579,
            width: 370,
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
