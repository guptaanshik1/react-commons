import useAddPost from "../hooks/useAddPost";
import useGetPosts from "../hooks/useGetPosts";

const GetPosts = () => {
  const { isPostsLoading, postsData } = useGetPosts();

  const { addPostMutate, addPostData } = useAddPost();

  const handleSubmit = () => {
    addPostMutate({
      id: 101,
      userId: 101,
      title: "testing custom hook mutation",
      body: "body for testing custom mutation",
    });
  };

  console.log({ addPostData });

  if (isPostsLoading) return <h1>Loading....</h1>;

  return (
    <div>
      {postsData &&
        postsData?.map((post) => <div key={post?.id}>{post?.title}</div>)}
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default GetPosts;
