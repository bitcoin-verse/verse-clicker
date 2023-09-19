export const stringToBool = (str: string) => {
  switch (str) {
    case "true":
      return true;
    case "false":
      return false;
  }
};
