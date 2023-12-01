import type { IOptions, RecursivePartial } from "tsparticles-engine";

export const goerliConfig: RecursivePartial<IOptions> = {
  style: {
    position: "absolute",
  },
  fpsLimit: 120,
  detectRetina: true,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    shadow: {
      enable: true,
      color: "#000000",
      blur: 5,
      offset: {
        x: 3,
        y: 3,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
      shadow: {
        enable: true,
        blur: 5,
        color: "#000000",
      },
    },
    move: {
      enable: true,
      speed: 2,
    },
  },
};
