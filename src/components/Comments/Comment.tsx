import { IComment } from "../../utils/data";

interface IProps {
  comment: IComment;
}

const Comment = ({ comment }: IProps) => {
  return (
    <div>
      <p>{`${comment?.name} - ${comment?.title}`}</p>
    </div>
  );
};

export default Comment;
