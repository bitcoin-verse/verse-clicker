import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useDispatch } from "../context/store";

const useAccountChange = () => {
  const { address, status } = useAccount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!address) return;
    dispatch({ type: "RESET_GAME" });

    if (status !== "connected") return;
    console.log("adress change, getting save");
    dispatch({ type: "GET_SAVE", payload: address });
    // dispatch({ type: "GET_SAVE", payload: address });
  }, [address]);
};

export default useAccountChange;
