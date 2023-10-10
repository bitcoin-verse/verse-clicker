import React, { FC, lazy, Suspense, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import config from "./config";

const ReactParticles = lazy(() => import("react-particles"));

const Particles: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Suspense>
      <ReactParticles
        id="particles"
        style={{
          position: "absolute",
        }}
        options={config}
        init={particlesInit}
      />
    </Suspense>
  );
};

export default Particles;
