import halfPresent from "../../assets/half-present.png";
import present from "../../assets/present.png";
import { colors } from "../../components/colors";
import { CustomTheme } from "../../components/themes";

export const Christmas: CustomTheme = {
  moon: present,
  halfMoon: halfPresent,
  background: `radial-gradient(#0F8A5F, #003a26)`,
  buttons: {
    primary: {
      background: {
        base: "linear-gradient(180deg, #0ebef0 0%, #0085ff 100%)",
        hover: "linear-gradient(180deg, #31c9f4 0%, #2c96f6 100%)",
        active: "linear-gradient(180deg, #0189fe 0%, #2c96f6 100%)",
        disabled: "#1a2231",
      },
      text: {
        base: colors.shade100,
        hover: colors.shade100,
        active: colors.shade100,
        disabled: colors.shade50,
      },
    },
    secondary: {
      background: {
        base: "linear-gradient(180deg, #425472 0%, #313e57 100%)",
        hover: "linear-gradient(180deg, #586f91 0%, #425472 100%)",
        active: "linear-gradient(180deg, #334059 0%, #425371 100%)",
        disabled: "#1a2231",
      },
      text: {
        base: colors.shade100,
        hover: colors.shade100,
        active: colors.shade100,
        disabled: colors.shade50,
      },
    },
    tertiary: {
      background: {
        base: "#1a2231",
        hover: "#313e57",
        active: "#252d40",
        disabled: colors.shade50,
      },
      text: {
        base: colors.shade90,
        hover: colors.shade100,
        active: colors.shade100,
        disabled: colors.shade60,
      },
    },
  },
};
