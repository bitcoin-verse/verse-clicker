const ShortNumbers = [
  "K",
  "M",
  "B",
  "T",
  "Qa",
  "Qi",
  "Sp",
  "Sx",
  "Oc",
  "No",
  "De",
  "Un",
  "Du",
  "Tr",
  "QaD",
  "QiD",
  "SpD",
  "SxD",
  "OcD",
  "NoD",
  "Vig",
];

export const formatNumber = (num?: number) => {
  if (!num) return num ?? "";
  let formatted = "";
  if (num >= 1000) {
    for (let i = 0; i < ShortNumbers.length; i++) {
      const divider = Math.pow(10, (i + 1) * 3);
      if (num >= divider) {
        formatted =
          (Math.trunc((num / divider) * 1000) / 1000).toLocaleString(
            undefined,
            { maximumFractionDigits: 1, minimumFractionDigits: 0 },
          ) + ShortNumbers[i];
      }
    }
    return formatted;
  }
  return (Math.trunc(num * 10) / 10).toLocaleString(undefined, {
    maximumFractionDigits: 3,
    minimumFractionDigits: 0,
  });
};
