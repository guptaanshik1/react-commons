import { IPost } from "../utils/data";
import useQuery from "./common/useQuery";

const useGetPosts = () => {
  const {
    data: postsData,
    error: postsError,
    isLoading: isPostsLoading,
  } = useQuery<Array<IPost>>("/posts");

  return { postsData, postsError, isPostsLoading };
};

export default useGetPosts;
