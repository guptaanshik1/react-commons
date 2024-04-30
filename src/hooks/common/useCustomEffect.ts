import { useRef } from "react";

const useCustomEffect = (effect: () => any, deps?: any[]) => {
  const firstRenderRef = useRef(true);
  const prevDeps = useRef([]);

  if (firstRenderRef.current) {
    firstRenderRef.current = false;
    const cleanUp = effect();
    if (cleanUp && typeof cleanUp === "function") {
      cleanUp();
    }
    return;
  }

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanUp = effect();
    if (cleanUp && typeof cleanUp === "function") {
      cleanUp();
    }
  }

  // @ts-ignore
  prevDeps.current = deps || [];
};

export default useCustomEffect;
