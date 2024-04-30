import { useEffect, useRef } from "react";

export interface IMemoRef<T> {
  value: T;
  deps: Array<any>;
}

export const areEqual = (
  prevDeps: Array<any>,
  newDeps: Array<any>
): boolean => {
  // if previously no deps and new deps then false
  if (!prevDeps.length) return false;
  // if both are unequal
  if (prevDeps?.length !== newDeps.length) return false;

  for (let i = 0; i < newDeps.length; i++) {
    // checking if all deps are equal
    if (prevDeps[i] !== newDeps[i]) return false;
  }
  return true;
};

const useCustomMemo = <T>(cb: () => any, deps: Array<any>): T => {
  const memoizedRef = useRef<IMemoRef<T> | null>(null);

  // checking changes in deps
  if (!memoizedRef.current || !areEqual(memoizedRef.current?.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  // cleanup
  useEffect(() => {
    return () => {
      memoizedRef.current = null;
    };
  }, []);

  return memoizedRef.current?.value;
};

export default useCustomMemo;
