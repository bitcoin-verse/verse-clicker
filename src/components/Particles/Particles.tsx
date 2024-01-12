import {
  Particles as ReactParticles,
  initParticlesEngine,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { FC, Suspense, useEffect, useMemo, useState } from "react";

import { useTrackedState } from "../../context/store";
import { createConfig } from "./config";

const Particles: FC = () => {
  const { buildings, gameMode: network } = useTrackedState();

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [network]);

  const buildingsCount = useMemo(() => {
    const count = buildings.reduce((p, c) => (c.locked ? p : p + 1), 0) - 1;
    return count;
  }, [buildings]);

  if (init) {
    return (
      <Suspense>
        <ReactParticles
          id="particles"
          style={{
            position: "absolute",
            zIndex: -1,
          }}
          options={createConfig({
            network,
            particlesNumber: buildingsCount * 5,
          })}
        />
      </Suspense>
    );
  }

  return <></>;
};

export default Particles;
