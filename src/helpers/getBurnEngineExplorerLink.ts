import getBurnEngineDetails from "../contracts/getBurnEngineDetails";

export const getBurnEngineExplorerLink = (chainId: number) => {
  const { address } = getBurnEngineDetails(chainId) || { address: "" };

  switch (chainId) {
    case 1:
      return `https://etherscan.io/address/${address}`;
    case 5:
      return `https://goerli.etherscan.io/address/${address}`;
    case 137:
      return `'https://polygonscan.com/address/${address}`;

    default:
      return "";
  }
};
