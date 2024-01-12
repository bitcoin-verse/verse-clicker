import { ISourceOptions } from "@tsparticles/engine";

import verseMoon from "../../../assets/verse-moon.png";

export const ethereumConfig: ISourceOptions = {
  style: {
    position: "absolute",
  },
  fpsLimit: 120,

  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        // value_area: 400,
      },
    },
    color: {
      value: "#8ef1ff",
    },

    shape: {
      type: "image",

      options: {
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: verseMoon,
        },
      },
    },

    links: {
      enable: false,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "top",
      random: false,
      straight: false,
      outModes: "out",
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
    },
    opacity: {
      value: { min: 0.1, max: 0.6 },
      animation: {
        enable: true,
        speed: 0.8,
        mode: "random",
        sync: false,
      },
    },
    size: {
      value: { min: 8, max: 16 },
    },
  },
  detectRetina: true,
};
