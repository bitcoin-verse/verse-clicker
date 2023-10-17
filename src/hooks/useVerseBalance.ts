import { useAccount, useChainId, useContractRead } from "wagmi";
import getTokenDetails from "../helpers/getTokenDetails";

const useVerseBalance = () => {
  const { address } = useAccount();
  const chainId = useChainId();

  const tokenDetails = getTokenDetails(chainId);

  const { data, error } = useContractRead({
    address: tokenDetails?.address,
    abi: tokenDetails?.abi,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    account: address,
    watch: true,
  });

  return { data, error };
};

export default useVerseBalance;
