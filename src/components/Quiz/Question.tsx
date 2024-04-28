import { IQuestionsData } from "../../utils/data";

interface IProps {
  questionData: IQuestionsData;
  onAnswerSelect: (
    isCorrect: boolean,
    answerOption: string,
    question: string
  ) => void;
}

const Question = ({ onAnswerSelect, questionData }: IProps) => {
  return (
    <div>
      <h5>{questionData?.question}</h5>
      <div className="grid grid-cols-2 gap-3">
        {questionData?.answerOptions?.map((answerOption) => {
          return (
            <div
              className="cursor-pointer"
              key={answerOption?.text}
              onClick={() =>
                onAnswerSelect(
                  answerOption?.isCorrect,
                  answerOption?.text,
                  questionData?.question
                )
              }
            >
              <p>{answerOption?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
