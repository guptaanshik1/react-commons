import { IComment } from "../../utils/data";
import Comment from "./Comment";

interface IProps {
  comments: IComment[];
}

const CommentsList = ({ comments }: IProps) => {
  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment?.id}>
          <Comment comment={comment} />
          {comment?.replies && (
            <div style={{ paddingLeft: "20px", marginLeft: "18px" }}>
              <CommentsList comments={comment?.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
