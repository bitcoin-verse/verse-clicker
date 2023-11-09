import type { IOptions, RecursivePartial } from "tsparticles-engine";

export const snow: RecursivePartial<IOptions> = {
  particles: {
    number: { value: 100 },
    move: { direction: "bottom", enable: !0, random: !1, straight: !1 },
    opacity: { value: { min: 0.1, max: 0.4 } },
    size: { value: { min: 1, max: 10 } },
    wobble: { distance: 20, enable: !0, speed: { min: -5, max: 5 } },
  },
};
