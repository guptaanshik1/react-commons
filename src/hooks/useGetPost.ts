import useQuery from "./common/useQuery";

const useGetPost = (postId: number) => {
  const pathVariables = { postId };

  const {
    data: postData,
    isLoading: isPostDataLoading,
    error: postDataError,
  } = useQuery("/posts/:postId", pathVariables);

  return { postData, isPostDataLoading, postDataError };
};

export default useGetPost;
