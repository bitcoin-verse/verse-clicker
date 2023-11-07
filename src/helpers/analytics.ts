import * as amplitude from "@amplitude/analytics-browser";
import { BrowserOptions } from "@amplitude/analytics-types";

export const initAmplitude = () => {
  try {
    const AMPLITUDE_API_KEY = process.env.REACT_APP_AMPLITUDE_API_KEY;

    if (!AMPLITUDE_API_KEY) throw new Error("AMPLITUDE_API_KEY not found");
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get("sessionId");
    const deviceId = urlParams.get("deviceId");

    const options: BrowserOptions = {};

    if (sessionId) {
      options.sessionId = Number(sessionId);
    }
    if (deviceId) {
      options.deviceId = deviceId;
    }

    amplitude.init(AMPLITUDE_API_KEY, options);

    console.log("Amplitude initialized");
  } catch (error) {
    console.log("Amplitude init error", error);
  }
};

type Breakpoint = "sm" | "md" | "lg" | "xl";

const breakpoints: Record<Breakpoint, number> = {
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
};

const getDeviceSize = (): string => {
  const width = window.innerWidth;

  let size = "xl";

  Object.keys(breakpoints)
    .reverse()
    .forEach((key) => {
      if (width <= breakpoints[key as Breakpoint]) {
        size = key;
      }
    });

  return size;
};

type Event =
  | { name: "connect wallet clicked"; blockchain?: string }
  | {
      name: "connect wallet option selected";
      blockchain?: string;
      connectOption: string;
    }
  | {
      name: "connect wallet result";
      blockchain?: string;
      connectOption?: string;
      success: boolean;
    }
  | {
      name: "Verse Clicker CTA tapped";
      cta: "buy" | "swap" | "stake" | "farm" | "banner";
      to: string;
    }
  | {
      name: "Verse Clicker Burn";
      blockchain?: string;
      result: number;
      txId: string;
      "blockchain address": string;
    };

export const logAmplitudeEvent = (event: Event) => {
  try {
    const { name, ...options } = event;
    const eventOptions = {
      entrypoint: "clicker",
      "current page": window.location,
      "screen size": getDeviceSize(),
      ...options,
    };

    amplitude.logEvent(name, eventOptions);
  } catch (error) {
    console.log("Error logging event", error);
  }
};
