const ShortNumbers = [
  "K",
  "M",
  "B",
  "T",
  "Qu",
  "Qu",
  "Se",
  "Se",
  "Oc",
  "No",
  "De",
  "Un",
  "Du",
  "Tr",
  "QuD",
  "QuD",
  "SeD",
  "SeD",
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
          (Math.trunc((num / divider) * 1000) / 1000).toFixed(3) +
          ShortNumbers[i];
      }
    }
    return formatted;
  }
  return (Math.trunc(num * 10) / 10).toFixed(1);
};
