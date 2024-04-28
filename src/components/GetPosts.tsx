import useAddPost from "../hooks/useAddPost";
import useGetPosts from "../hooks/useGetPosts";
import HigherOrder from "./HigherOrder";

const GetPosts = () => {
  const { isPostsLoading, postsData } = useGetPosts();

  const { addPostMutate, addPostData } = useAddPost();

  const handleSubmit = () => {
    addPostMutate(
      {
        id: 101,
        userId: 101,
        title: "testing custom hook mutation",
        body: "body for testing custom mutation",
      },
      {
        onSuccess: () => {
          addPostMutate({
            id: 102,
            userId: 102,
            title: "testing custom hook mutation",
            body: "body for testing custom mutation",
          });
        },
      }
    );
  };

  if (isPostsLoading) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>Posts</h1>
      {postsData &&
        postsData
          ?.slice(0, 10)
          ?.map((post) => <div key={post?.id}>{post?.title}</div>)}
      <button onClick={handleSubmit}></button>
    </div>
  );
};

const GetPostsComp = HigherOrder("Posts");
export default GetPostsComp;
