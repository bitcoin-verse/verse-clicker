import { NetworkName, isOfTypeNetworkName } from "../context/reducers/network";

type ValidParams = {
  campaign?: NetworkName;
};

const useSearchParams = (): ValidParams => {
  const search = window.location.search;
  const urlSearchParams = new URLSearchParams(search);
  const { campaign } = Object.fromEntries(urlSearchParams.entries());

  return {
    campaign: isOfTypeNetworkName(campaign)
      ? (campaign as NetworkName)
      : undefined,
  };
};

export default useSearchParams;
