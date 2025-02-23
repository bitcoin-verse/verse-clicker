const ShortNumbers = [
  "K",
  "M",
  "B",
  "T",
  "Qa",
  "Qi",
  "Sx",
  "Sp",
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

export const formatNumber = (num?: number, fractionDigits?: number) => {
  if (!num) return num ?? "";
  let formatted = "";
  if (num < 1) {
    return num.toFixed(2).replace(/\.?0+$/, "");
  }
  if (num >= 10000) {
    for (let i = 0; i < ShortNumbers.length; i++) {
      const divider = Math.pow(10, (i + 1) * 3);
      if (num >= divider) {
        const trunc = Math.trunc((num / divider) * 1000) / 1000;

        formatted =
          trunc.toLocaleString(undefined, {
            maximumFractionDigits: Math.abs(
              5 -
                ShortNumbers[i].length -
                Math.abs(1 - trunc.toFixed(0).length),
            ),
            minimumFractionDigits: Math.abs(
              5 -
                ShortNumbers[i].length -
                Math.abs(1 - trunc.toFixed(0).length),
            ),
          }) + ShortNumbers[i];
      }
    }
    return formatted;
  }

  if (num >= 1000) {
    return (Math.trunc(num * 10) / 10).toLocaleString(undefined, {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });
  }

  return (Math.trunc(num * 10) / 10).toLocaleString(undefined, {
    maximumFractionDigits: 3,
    minimumFractionDigits: fractionDigits ?? 1,
  });
};
