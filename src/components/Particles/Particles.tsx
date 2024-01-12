import React, { FC, Suspense, useEffect, useMemo, useState } from "react";
import {
  initParticlesEngine,
  Particles as ReactParticles,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { createConfig } from "./config";
import { useTrackedState } from "../../context/store";

const Particles: FC = () => {
  const { buildings, gameMode: network } = useTrackedState();

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
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
