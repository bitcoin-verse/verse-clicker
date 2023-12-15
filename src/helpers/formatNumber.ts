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
  if (num >= 10000) {
    for (let i = 0; i < ShortNumbers.length; i++) {
      const divider = Math.pow(10, (i + 1) * 3);
      if (num >= divider) {
        formatted =
          (Math.trunc((num / divider) * 1000) / 1000).toLocaleString(
            undefined,
            {
              maximumFractionDigits: Math.abs(4 - ShortNumbers[i].length),
              minimumFractionDigits: Math.abs(4 - ShortNumbers[i].length),
            },
          ) + ShortNumbers[i];
      }
    }
    return formatted;
  }

  if (num > 1000) {
    return (Math.trunc(num * 10) / 10).toLocaleString(undefined, {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  }

  return (Math.trunc(num * 10) / 10).toLocaleString(undefined, {
    maximumFractionDigits: 3,
    minimumFractionDigits: 1,
  });
};
