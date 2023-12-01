import type { IOptions, RecursivePartial } from "tsparticles-engine";
import verseMoon from "../../../assets/verse-moon.png";

export const ethereumConfig: RecursivePartial<IOptions> = {
  style: {
    position: "absolute",
  },
  fpsLimit: 120,

  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 400,
      },
    },
    color: {
      value: "#8ef1ff",
    },

    shape: {
      type: "image",

      polygon: {
        nb_sides: 5,
      },

      image: {
        src: verseMoon,
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
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },

    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.1,
        sync: false,
      },
    },

    size: {
      value: { min: 8, max: 16 },
    },
  },
  detectRetina: true,
};
