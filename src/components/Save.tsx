import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "../context/store";
import { useAccount } from "wagmi";
import { Button } from "./Button";

const Save: FC = () => {
  const dispatch = useDispatch();
  const { address } = useAccount();
  const [wiped, setWiped] = useState(false);

  useEffect(() => {
    if (wiped && address) {
      dispatch({ type: "SAVE_GAME", payload: { address } });
      setWiped(false);
    }
  }, [wiped]);

  return (
    <div style={{ display: "flex", gap: 16, padding: "16px 0" }}>
      <Button
        onClick={() => {
          console.log("saving");
          if (!address) return;

          dispatch({
            type: "SAVE_GAME",
            payload: {
              address,
            },
          });
        }}
      >
        Save
      </Button>
      <Button
        onClick={() => {
          console.log("loading");
          if (!address) return;

          dispatch({ type: "GET_SAVE", payload: address });
        }}
      >
        Load
      </Button>
      <Button
        onClick={() => {
          console.log("wiping");
          dispatch({ type: "RESET_GAME" });
          setWiped(true);
        }}
      >
        Wipe
      </Button>
    </div>
  );
};

export default Save;
