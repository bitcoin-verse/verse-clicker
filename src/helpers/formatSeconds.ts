export const formatSeconds = (seconds: number) => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const day = d > 0 ? d + "d " : "";
  const hour = h > 0 ? h + "h " : "";
  const minute = m > 0 ? m + "m " : "";
  const second = s > 0 ? s + "s " : "";

  return day + hour + minute + second;
};
