import { useEffect, useState } from "react";
import { useEnsName } from "wagmi";
import truncateEthAddress from "../helpers/truncateEthAddress";

const useUsername = (addr: string) => {
  const [address, setAddress] = useState(truncateEthAddress(addr));

  const { data } = useEnsName({
    address: addr as `0x${string}`,
    chainId: 1,
  });

  useEffect(() => {
    if (data) {
      setAddress(data);
    }
  }, [data]);

  return address;
};

export default useUsername;
