const isDev = process.env.REACT_APP_DEV_ENV === "development";
const VERSE_BASE_URL =
  process.env.REACT_APP_VERSE_BASE_URL || "https://verse.bitcoin.com/";

export const generateScratcherUrl = (isWallet: boolean, campaign?: string) => {
  const URL_PROD = `https://scratcher.verse.bitcoin.com/`;
  const URL_DEV = `https://dev.scratcher.verse.bitcoin.com/`;

  const BASE_URL = isDev ? URL_DEV : URL_PROD;
  const query = new URLSearchParams();

  if (campaign) query.append("campaign", campaign);
  if (isWallet) query.append("origin", "wallet");

  return `${BASE_URL}?${query.toString()}`;
};

export const generateFarmsUrl = (
  isWallet: boolean,
  network: "eth",
  farm?: "verse-eth" | "usd-eth", // eg of farm path, we dont use in this project tho
) => {
  const query = new URLSearchParams();

  if (isWallet) query.append("origin", "wallet");

  return `${VERSE_BASE_URL}farms/${network}/${
    farm ? `${farm}/` : ""
  }?${query.toString()}`;
};

export const generateStakingUrl = (
  isWallet: boolean,
  network: "eth",
  coin: "verse",
) => {
  const query = new URLSearchParams();

  if (isWallet) query.append("origin", "wallet");

  return `${VERSE_BASE_URL}staking/${network}/${coin}?${query.toString()}`;
};

export const generateSwapUrl = (isWallet: boolean, coin: "verse") => {
  const query = new URLSearchParams();

  query.append("coin", coin);
  if (isWallet) query.append("origin", "wallet");

  return `${VERSE_BASE_URL}swap/?${query.toString()}`;
};

export const generateBuyUrl = (isWallet: boolean, coin: "verse") => {
  if (isWallet) {
    const URL_DEEPLINK = `bitcoincom://buy/`;
    const deeplinks = {
      verse:
        "ETH_BLOCKCHAIN-ERC_20_PROTOCOL-0x249cA82617eC3DfB2589c4c17ab7EC9765350a18",
    };

    return `${URL_DEEPLINK}${deeplinks[coin]}`;
  }

  const URL_PROD = `https://buy.bitcoin.com/`;
  const URL_DEV = `https://buy.dev.cloud.bitcoin.com/`;

  const BASE_URL = isDev ? URL_DEV : URL_PROD;

  return `${BASE_URL}${coin}`;
};
