import { commentsData } from "../../utils/commentsData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div>
      <h1>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
