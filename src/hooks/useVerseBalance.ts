import { useAccount, useChainId, useContractRead } from "wagmi";
import getVerseTokenDetails from "../contracts/getVerseTokenDetails";

const useVerseBalance = () => {
  const { address } = useAccount();
  const chainId = useChainId();

  const tokenDetails = getVerseTokenDetails(chainId);

  const { data, error } = useContractRead({
    address: tokenDetails?.address,
    abi: tokenDetails?.abi,
    functionName: "balanceOf",
    chainId,
    args: address ? [address] : undefined,
    account: address,
    watch: true,
  });

  return { data, error };
};

export default useVerseBalance;
