import React, { FC, lazy, Suspense, useCallback, useMemo } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { createConfig } from "./config";
import { useTrackedState } from "../../context/store";

const ReactParticles = lazy(() => import("react-particles"));

const Particles: FC = () => {
  const { buildings } = useTrackedState();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const buildingsCount = useMemo(() => {
    const count = buildings.reduce((p, c) => (c.locked ? p : p + 1), 0) - 1;
    return count;
  }, [buildings]);

  return (
    <Suspense>
      <ReactParticles
        id="particles"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
        options={createConfig({ particlesNumber: buildingsCount * 5 })}
        init={particlesInit}
      />
    </Suspense>
  );
};

export default Particles;
