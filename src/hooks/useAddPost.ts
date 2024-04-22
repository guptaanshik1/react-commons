import useMutation from "./common/useMutation";

const useAddPost = () => {
  const {
    mutate: addPostMutate,
    isLoading: isAddPostLoading,
    data: addPostData,
    error: addPostError,
  } = useMutation("/posts");

  return { addPostMutate, isAddPostLoading, addPostData, addPostError };
};

export default useAddPost;
