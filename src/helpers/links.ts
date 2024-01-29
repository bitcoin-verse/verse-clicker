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

  if (query.size > 0) return `${BASE_URL}?${query.toString()}`;

  return BASE_URL;
};

export const generateFarmsUrl = (
  isWallet: boolean,
  network: "eth",
  farm?: "verse-eth" | "usd-eth", // eg of farm path, we dont use in this project tho
) => {
  const farmURL = `${VERSE_BASE_URL}farms/${network}/${farm ? `${farm}/` : ""}`;
  const query = new URLSearchParams();

  if (isWallet) query.append("origin", "wallet");

  if (query.size > 0) return `${farmURL}?${query.toString()}`;

  return farmURL;
};

export const generateStakingUrl = (
  isWallet: boolean,
  network: "eth",
  coin: "verse",
) => {
  const stakingURL = `${VERSE_BASE_URL}staking/${network}/${coin}/`;
  const query = new URLSearchParams();

  if (isWallet) query.append("origin", "wallet");

  if (query.size > 0) return `${stakingURL}?${query.toString()}`;

  return stakingURL;
};

export const generateSwapUrl = (isWallet: boolean, coin: "verse") => {
  const query = new URLSearchParams();
  const swapURL = `${VERSE_BASE_URL}swap/`;

  query.append("coin", coin);
  if (isWallet) query.append("origin", "wallet");

  return `${swapURL}?${query.toString()}`;
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

export const generateBurnEngineUrl = (isWallet: boolean) => {
  const query = new URLSearchParams();

  if (isWallet) query.append("origin", "wallet");

  if (query.size > 0) return `${VERSE_BASE_URL}?${query.toString()}`;

  return `${VERSE_BASE_URL}/burn`;
};
