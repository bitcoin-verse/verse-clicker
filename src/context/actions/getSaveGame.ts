import { getProgress } from "../../api/progress";
import { magic } from "../../helpers/base64";
import { Action, State } from "../store";

export type AsyncActionGetSaveGame = {
  type: "GET_SAVE";
  payload: string;
};

export const getSave = ({
  dispatch,
}: {
  dispatch: React.Dispatch<Action | AsyncActionGetSaveGame>;
  getState: () => State;
  signal: AbortSignal;
}) => {
  return async (action: AsyncActionGetSaveGame) => {
    try {
      dispatch({ type: "STARTED" });

      const response = await getProgress(action.payload);
      // const response = `Q09PS0lFQ0xJQ0tFUnxNVFo4TVRaOE1Id3hOaTB3ZkdaaGJITmxmR1poYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxJekI4ZEhKMVpYeG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaU013ZkhSeWRXVjhabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlVqTUh4MGNuVmxmR1poYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sSXpCOGRISjFaWHhtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlNNd2ZIUnlkV1Y4Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVak1IeDBjblZsZkdaaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObEl6QjhkSEoxWlh4bVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpTTXdmSFJ5ZFdWOFptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVWpNSHgwY25WbGZHWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxJekI4ZEhKMVpYeG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaU013ZkhSeWRXVjhabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlVqTUh4MGNuVmxmR1poYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sSXpCOGRISjFaWHhtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlNNd2ZIUnlkV1Y4Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVNlptRnNjMlU2Wm1Gc2MyVTZabUZzYzJVak1IeDBjblZsZkdaaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObE9tWmhiSE5sT21aaGJITmxPbVpoYkhObEl6QjhkSEoxWlh4bVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpUcG1ZV3h6WlRwbVlXeHpaVHBtWVd4elpRPT0=`;

      console.log("get save", response);
      if (!response) throw new Error("Error getting response");

      const save = magic(response);

      if (save === false) throw new Error("Save is broken");

      dispatch({
        type: "GAME_LOADED",
        payload: response,
      });
    } catch (error) {
      dispatch({ type: "FAILED", error: error as unknown as Error });
    }
  };
};
