import { lazy } from "react";

// useLazyLoad("../components/GetPosts", "GetPosts")

interface IProps {
  path: string;
  namedExport?: string;
}

const useLazyLoad = ({ path, namedExport }: IProps) => {
  return lazy(() => {
    const promise = import(path);

    if (!namedExport) {
      return promise;
    } else {
      return promise.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export default useLazyLoad;
