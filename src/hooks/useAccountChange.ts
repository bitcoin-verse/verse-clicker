import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";

const useAccountChange = () => {
  const { address } = useAccount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!address) return;
    dispatch({ type: "RESET_GAME" });
    dispatch({ type: "GET_SAVE", payload: address });
  }, [address]);
};

export default useAccountChange;
